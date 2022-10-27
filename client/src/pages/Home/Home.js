import Input from "../../components/Input/Input";
import { useGetData } from "../../hooks/useGetData";
import "./home.scss"



const Home = (props) => {

    const {data} = useGetData()

    return(
        <div className="home">
           <div className="home__main">
                <div className="home__main__inner">
                    <div className="home__main__inner__brandname">
                    <h1 id='brandname'>The Company</h1>
                    </div>
                    <div className="home__main__inner__content">

                        <div className="home__main__inner__title">
                            <h2 id='title'>Shipping Time Calculator</h2>
                        </div>
                        <div className="home__main__inner__form">

                        <form>
                            <Input placeholder='Order Date'/>
                            <Input placeholder='Fabric Type' data={data?.product_types}/>
                            <Input placeholder='Quantity' data={data?.product_types}/>
                            <Input placeholder='Quantity' type="submit"/>
                        </form>

                        </div>
                        <div className="home__main__inner__result">
                            <h1 id='result'>Please enter your 
                            order information to estimate shipping date...</h1>
                        </div>

                    </div>
                </div>
           </div>
           <div className="home__gradient" />

        </div>
    )

}

export default Home;