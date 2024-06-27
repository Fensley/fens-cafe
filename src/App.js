export default function App() {
  return <Box />;
}

function Box() {
  return (
    <section>
      <Main />
      <Forimg />
    </section>
  );
}

function Main() {
  return (
    <nav>
      <div className="main1">
        <div>
          <p>Main</p>
        </div>

        <div className="about-sec">
          <p>About </p>
          <p>Shop</p>
          <p>Press</p>
        </div>

        <div className="deli-sec">
          <p>Delivery</p>
          <p> Cart (4)</p>
        </div>
      </div>
    </nav>
  );
}

function Forimg() {
  return (
    <div className="img-center">
      <p className="serenity"> Fensley brew</p>
      <img
        src="https://images.unsplash.com/photo-1536914629078-6fda32a00cd2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="model"
        height="100"
      />
    </div>
  );
}
