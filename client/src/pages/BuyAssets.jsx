import React from 'react'
import Widget101 from '../components/Widget101'
import Widget102 from '../components/Widget102'
import MainNavBar from '../components/MainNavBar'
const BuyAssets = () => {
  return (
    <div>
      <MainNavBar />
      <div className="container-fluid mt-5">
        <div className="row mb-5">
        <Widget102 />
        <Widget101 />
          <div className="col-md-12 grid-margin mt-2 p-4">
            <div style={{ border: "none", borderRadius: "9px" }} className="card p-2 card-gradient">
              <div className="table-responsive">
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <td className="text-center p-0"><a className="text-warning" href="https://www.moonpay.com/buy/btc">MoonPay</a></td>
                    </tr>
                    <tr>
                      <td className="text-center p-0"><a className="text-warning" href="https://buy.bitcoin.com/">Bitclin.com</a></td>
                    </tr>
                    <tr>
                      <td className="text-center p-0"><a className="text-warning" href="https://www.alchemy.com/dapps/crypto-dot-com">Alchemy</a></td>
                    </tr>
                    <tr>
                      <td className="text-center p-0"><a className="text-warning" href="https://ramp.network/buy">Ramp Network</a></td>
                    </tr>
                    <tr>
                      <td className="text-center p-0"><a className="text-warning" href="https://paybis.com/">Paybis</a></td>
                    </tr>
                    <tr>
                      <td className="text-center p-0"><a className="text-warning" href="https://www.simplex.com/">Simplex</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyAssets
