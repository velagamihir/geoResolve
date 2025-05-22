import React from "react";

const Home = () => {
  return (
    <div className="vh-100">
      <div id="seperationDiv" className="h-25">
        <nav className="h-25 bg-primary-subtle d-flex flex-row justify-content-between">
          <div id="headingDiv" className="w-25 h-100">
            <h1 className="fw-medium">GeoResolve</h1>
          </div>
          <div
            id="buttonsDiv"
            className="w-25 h-100 d-flex flex-row justify-content-evenly"
          >
            <button className="btn btn-success">Login</button>
            <button className="btn btn-success">Register</button>
          </div>
        </nav>
      </div>
      <div id="remainingDiv" className="vh-100 d-flex flex-column">
        <div id="logoDiv" className="w-100 h-50 d-flex justify-content-center">
          <div className="h-75 w-25 border border-danger rounded-circle"></div>
        </div>
        <div id="featuresDiv" className="vh-100 d-flex justify-content-evenly">
          <div id="feature1" className="border border-warning w-25 h-75">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo maxime
            cupiditate nostrum perspiciatis placeat aliquid numquam neque nulla
            sunt, ab molestias quisquam! Excepturi similique nobis
            necessitatibus recusandae sapiente, rem harum in soluta id quae
            autem, itaque natus saepe dolore? Ipsa aperiam minima veritatis est
            deserunt sed magni voluptatibus dicta, sit accusantium quae dolorum
            debitis quod laudantium quisquam cumque maiores facere accusamus
            rerum illum ad numquam quam non! Debitis ipsam, nemo sunt
            consequuntur suscipit cupiditate quidem cum modi voluptate iusto
            error culpa dignissimos, porro iste. Atque doloribus sunt illo
            officiis mollitia pariatur veritatis repellendus saepe perspiciatis,
            possimus nesciunt exercitationem accusantium recusandae.
          </div>
          <div id="feature2" className="border border-primary w-25 h-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            harum magnam facilis cumque. Accusamus cumque quod vel repudiandae
            officia sint dolores ad necessitatibus fugit? Pariatur maiores ea ut
            accusantium velit fugit vero impedit quasi tempora, dignissimos
            doloremque aliquid necessitatibus animi quas possimus dolorum
            explicabo beatae minima. Assumenda doloremque ullam rerum commodi
            est, incidunt maiores cum pariatur consectetur reprehenderit
            molestiae adipisci laboriosam officia! Illo labore deleniti rem,
            doloribus ipsum est esse aliquid asperiores molestias earum, cumque
            consequatur provident cupiditate numquam repellat laboriosam non
            sapiente accusamus ducimus ut eaque soluta voluptatem corrupti?
            Labore natus aut maxime numquam quam porro architecto error aperiam?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
