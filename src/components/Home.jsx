import {  Carousel } from "react-bootstrap"

const Home = () => {
    return ( 
        <>
    <div className="hero-container" >
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt51f0cc9752931881/639ded71fa9530798c2329ba/messi-ears-16-9.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h2 className="h1" >Fast</h2>
            <p  >Get the latest football news before they are even released</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="h1" >Reliable</h2>
            <p >Get information from the most reliable sources in the world</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1323&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="h1" >Trusted</h2>
            <p >
              The most trusted football blog news since the creation of the universe
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div>
        
    </div></>
     );
}
 
export default Home;