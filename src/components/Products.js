import Shoe from './Shoelist';
import "./Product.css"
import { Link, Outlet } from 'react-router-dom';


export default function Products() {
  return (
    <>
    <div id='body'>

      {Object.entries(Shoe).map(([i, { name, img, price }]) => {
        return (
          <div className="container">
            <Link to={`/Products/${i}`} style={{textDecoration:'none',color: 'black'}}>
              <div className="card">
                <div className="card-header">
                  <img
                    src={img}
                    alt={i}
                  />
                </div>
                <div className="card-body">
                  <span className="tag tag-teal">{name}</span>
                  <span><h4>{price}</h4></span>

                </div>
              </div>
            </Link>
            <Outlet/>




          </div>

        )

      })}

    </div>
    
    </>
  )
}



