import "./top.css"
import log from "../assets/icon2.png"
import { MODAL } from "../modal"

function TOP(){
    return(
        <>
        <div className=" mt-5" style={{marginLeft:"650px"}}>
        <h1 className="ev3">ABOUT US</h1>
        </div>
        <section className="d-flex flex-row">
            <div className="mid p-5 mb-5">
                <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo eum fuga exercitationem dignissimos officiis nihil asperiores voluptatibus voluptates. Earum quasi facilis accusantium voluptatum sequi repellendus, obcaecati maiores odio eius.
                    Possimus eligendi quas esse alias iusto fugiat labore. Quidem ad dignissimos non eligendi ab veritatis molestias atque magni harum doloribus, nisi assumenda? Adipisci veniam repudiandae ipsam facilis aliquid numquam pariatur.
                    Eius tempora exercitationem facilis iusto impedit laboriosam id natus placeat laborum porro aperiam distinctio nobis culpa libero illo, suscipit recusandae numquam repudiandae! Doloremque suscipit sunt iusto, minus minima enim ut.
                    Illum, soluta ipsum vel repellat consequatur repudiandae placeat! Soluta, recusandae? Dignissimos illo error cupiditate iure at nemo repudiandae eius rem modi facere consectetur, sapiente illum! Consectetur eveniet autem ipsum aliquam?
                    Necessitatibus odio quae eos nihil enim, quibusdam est.
                </p>
            </div>
            <div>
                <img className=" mt-5" src={log} alt="" style={{height:""}}/>
            </div>
        </section>
        
        </>
    )
}
export {TOP}