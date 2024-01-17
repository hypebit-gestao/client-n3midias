import Container from "./Container";

const ContentPage = ({
  children,
  background,
  centralized,
  heightScreen,
  id,
}) => {
  return (
    <section
      id={id}
      className={`${background}  py-12 ${
        heightScreen && "h-auto min-h-screen"
      }  ${centralized === true && "flex items-center"}`}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default ContentPage;
