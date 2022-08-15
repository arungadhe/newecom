import React from "react";
import Products from "../Product";

const Home = () => {
    return (
        <div className=" hero">
            <div className="card text-bg-dark border-0">
                <img src="https://cdn.dribbble.com/users/552605/screenshots/14449425/media/6e7f3497799fb85cd23fc29325d1a02f.png?compress=1&resize=1000x750&vertical=top" class="card-img" alt="Background"  height="550px"/>
                <div className="card-img-overlay d-flex ">
                    <div className=" container">

                    
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW OFFERS</h5>
                    <p className="card-text lead fs-2">CHECK OUT ALL OFFERS</p>
                    </div>
                </div>
            </div>

              < Products />

        </div>
    );
};

export default Home;