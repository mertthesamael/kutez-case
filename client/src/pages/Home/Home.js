import { useContext} from "react";
import Form from "../../components/Form/Form";
import { useGetData } from "../../hooks/useGetData";
import { ProductContext } from "../../store/contex";
import "./home.scss"



const Home = (props) => {
    const {data} = useGetData()
    const {result} = useContext(ProductContext)
    return (
      <div className="home">
        <div className="errPopup">Please Fill All Information Correctly</div>
        <div className="home__main">
          <div className="home__main__inner">
            <div className="home__main__inner__brandname">
              <h1 id="brandname">The Company</h1>
            </div>
            <div className="home__main__inner__content">
              <div className="home__main__inner__title">
                <h2 id="title">Shipping Time Calculator</h2>
              </div>
              <div className="home__main__inner__form">
                <Form data={data} />
              </div>
              <div className="home__main__inner__result">
                {result ?
            <h1 id="result">
                Your Estimated Shipping Time Is <b>{result}</b>
                </h1>:
                <h1 id="result">
                Please enter your order information to estimate shipping date...
                </h1>
            }

              </div>
            </div>
          </div>
        </div>
        <div className="home__gradient" />
      </div>
    );

}

export default Home;