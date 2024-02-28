const { page, tab, ...passProps } = props;

const { routes } = VM.require("/*__@appAccount__*//widget/config.app") ?? {
  routes: {},
};

const { AppLayout } = VM.require(
  "/*__@appAccount__*//widget/template.AppLayout"
) || {
  AppLayout: () => <></>,
};

if (!page) page = Object.keys(routes)[0] || "home";

const Root = styled.div`
 
`;

function Router({ active, routes }) {
  const routeParts = active.split(".");

  let currentRoute = routes;
  let src = "";
  let defaultProps = {};

  for (let part of routeParts) {
    if (currentRoute[part]) {
      currentRoute = currentRoute[part];
      src = currentRoute.path;

      if (currentRoute.init) {
        defaultProps = { ...defaultProps, ...currentRoute.init };
      }
    } else {
      // Handle 404 or default case for unknown routes
      return <p>404 Not Found</p>;
    }
  }

  return (
    <div key={active}>
      <Widget
        src={src}
        props={{
          currentPath: `//*__@appAccount__*//widget/app?page=${page}`,
          page: tab,
          ...passProps,
          ...defaultProps,
        }}
      />
    </div>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

return (
  <Root>
    <Container>
      <AppLayout page={page} routes={routes} {...props}>
        <Content>
          <Router active={page} routes={routes} />
        </Content>
      </AppLayout>
    </Container>
  </Root>
);
