const { Layout, Router } = VM.require("/*__@appAccount__*//widget/components") || {
  Layout: () => <></>,
  Router: () => <></>,
};

const { page, tab, ...passProps } = props;

const { routes } = {
  type: "app",
  routes: {
    home: {
      path: "/*__@appAccount__*//widget/page.home",
      blockHeight: "final",
      init: {
        name: "Home",
      },
    },
    new: {
      path: "/*__@appAccount__*//widget/page.new",
      blockHeight: "final",
      init: {
        name: "New",
      },
    },
    view: {
      path: "/*__@appAccount__*//widget/page.view",
      blockHeight: "final",
      init: {
        name: "View",
      },
    },
    end: {
      path: "/*__@appAccount__*//widget/page.end",
      blockHeight: "final",
      init: {
        name: "End",
      },
    },
  },
};

if (!page) page = Object.keys(routes)[0] || "home";

const Root = styled.div`
  .container {
    border: 1px solid red;
  }
  .button {
    
  }
  .input {
  }
  .layout {
    border: 1px solid green;
  }
  .header {
    border: 1px solid blue;
  }
  .content {
  }
  .footer {
  }
`;

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
      <Layout
        variant="standard"
        blocks={{
          Header: () => ( // customize your header
            <Widget
              src="/*__@appAccount__*//widget/components.Navbar"
              props={{ page, routes, ...props }}
            />
          ),
          Footer: () => <></>, // customize your footer
        }}
      >
        <Content>
          <Router active={page} routes={routes} />
        </Content>
      </Layout>
    </Container>
  </Root>
);
