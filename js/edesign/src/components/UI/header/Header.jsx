import React from 'react'
import './Header.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   LInk
// } from "react-router-dom"
// import '../../Price'
// import Price from '../../Price'


const Header = () => {
    return (
      <div className="Header">
          <div className='HeaderLeft'>
          <svg className = "logo" width="114" height="30" viewBox="0 0 114 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.008 11.94V21.552C10.008 22.224 10.044 22.644 10.116 22.812C10.188 22.98 10.416 23.136 10.8 23.28C11.184 23.4 11.628 23.472 12.132 23.496C12.636 23.52 13.536 23.532 14.832 23.532C17.568 23.532 19.632 22.728 21.024 21.12C22.44 19.488 23.328 16.884 23.688 13.308H24.12V24H0.72V23.604C2.856 23.604 4.272 23.472 4.968 23.208C5.208 23.112 5.364 22.992 5.436 22.848C5.532 22.68 5.58 22.26 5.58 21.588V3.156C5.58 2.46 5.532 2.028 5.436 1.86C5.388 1.764 5.232 1.668 4.968 1.572C4.704 1.476 4.164 1.38 3.348 1.284C2.532 1.188 1.656 1.14 0.72 1.14V0.779999H22.932V9.78H22.5C22.5 7.932 22.032 6.168 21.096 4.488C19.848 2.256 18.084 1.14 15.804 1.14C14.892 1.14 13.968 1.152 13.032 1.176C12.12 1.176 11.304 1.284 10.584 1.5C10.368 1.596 10.212 1.728 10.116 1.896C10.044 2.04 10.008 2.46 10.008 3.156V11.544C12.504 11.544 14.052 11.292 14.652 10.788C15.564 10.02 16.2 7.956 16.56 4.596H16.956V18.816H16.56C16.2 15.528 15.576 13.5 14.688 12.732C14.064 12.204 12.504 11.94 10.008 11.94Z" fill="#4166E7"/>
            <path d="M33.7549 5.85155C36.9961 5.85155 39.4951 6.6433 41.2518 8.2268C43.0085 9.78557 43.8868 11.9876 43.8868 14.833C43.8868 17.7278 43.0208 19.9794 41.2889 21.5876C39.5569 23.1959 36.9714 24 33.5322 24H27.5198V5.85155H33.7549ZM33.6435 8.67216H30.6002V21.1052H33.9775C36.2043 21.1052 37.8992 20.5856 39.0621 19.5464C40.225 18.4825 40.8064 16.9361 40.8064 14.9072C40.8064 10.7505 38.4188 8.67216 33.6435 8.67216ZM60.238 18.3588H49.4008C49.4751 19.3485 49.9328 20.1526 50.774 20.7711C51.6153 21.3897 52.5926 21.699 53.706 21.699C55.4627 21.699 56.774 21.1546 57.64 20.066L59.3101 21.8845C57.8256 23.4433 55.8833 24.2227 53.4833 24.2227C51.5039 24.2227 49.8462 23.567 48.5101 22.2557C47.174 20.9443 46.506 19.2124 46.506 17.0598C46.506 14.9567 47.1864 13.2495 48.5472 11.9381C49.9081 10.6268 51.5534 9.97113 53.4833 9.97113C55.4132 9.97113 57.0215 10.5526 58.3081 11.7155C59.5947 12.8783 60.238 14.4247 60.238 16.3546V18.3588ZM57.3431 16.0577C57.3431 14.9443 56.9843 14.066 56.2668 13.4227C55.574 12.7794 54.6709 12.4577 53.5575 12.4577C52.4441 12.4577 51.4668 12.7918 50.6256 13.4598C49.8091 14.1278 49.4008 14.9938 49.4008 16.0577H57.3431ZM68.2136 24.2227C65.9868 24.2227 63.9827 23.5299 62.2013 22.1443L63.6116 19.8804C65.1951 21.0928 66.7538 21.699 68.2879 21.699C68.9312 21.699 69.4384 21.5505 69.8095 21.2536C70.2054 20.932 70.4033 20.5361 70.4033 20.066C70.4033 19.3732 69.4879 18.7546 67.6569 18.2103C67.6075 18.1856 67.5456 18.1608 67.4714 18.1361C67.4219 18.1113 67.3848 18.099 67.36 18.099C64.4899 17.332 63.0549 16.033 63.0549 14.2021C63.0549 12.9155 63.5373 11.8887 64.5023 11.1216C65.492 10.3546 66.791 9.97113 68.3992 9.97113C69.9827 9.97113 71.492 10.4412 72.927 11.3814L71.8507 13.534C70.7373 12.7918 69.5126 12.4206 68.1765 12.4206C66.6178 12.4206 65.8384 12.9155 65.8384 13.9052C65.8384 14.3258 65.9868 14.6351 66.2837 14.833C66.6054 15.0062 67.125 15.1794 67.8425 15.3526C68.9312 15.6495 69.8466 15.9464 70.5889 16.2433C71.0837 16.466 71.5167 16.701 71.8879 16.9485C72.8281 17.5918 73.2982 18.5691 73.2982 19.8804C73.2982 21.167 72.8157 22.2186 71.8507 23.0351C70.9105 23.8268 69.6982 24.2227 68.2136 24.2227ZM79.5064 24H76.6116V10.1938H79.5064V24ZM76.2404 6.11134C76.2404 5.61649 76.4136 5.19588 76.76 4.84948C77.1311 4.47835 77.5765 4.29278 78.0961 4.29278C78.5909 4.29278 79.0116 4.47835 79.3579 4.84948C79.7291 5.19588 79.9147 5.61649 79.9147 6.11134C79.9147 6.63093 79.7291 7.07629 79.3579 7.44742C79.0116 7.79381 78.5909 7.96701 78.0961 7.96701C77.5765 7.96701 77.1435 7.78144 76.7971 7.41031C76.426 7.06392 76.2404 6.63093 76.2404 6.11134ZM96.5153 10.1938V22.2186C96.5153 24.5938 95.872 26.4124 94.5854 27.6742C93.2988 28.9361 91.5792 29.567 89.4266 29.567C87.3978 29.567 85.5173 28.9113 83.7854 27.6L85.1586 25.4103C86.5442 26.4247 87.9173 26.932 89.2782 26.932C92.2472 26.932 93.7318 25.4474 93.7318 22.4784V20.6969C93.3112 21.5134 92.6926 22.1691 91.8761 22.6639C91.0596 23.134 90.1565 23.3691 89.1668 23.3691C87.3359 23.3691 85.8266 22.7381 84.639 21.4763C83.4761 20.1897 82.8947 18.5938 82.8947 16.6887C82.8947 14.7588 83.4761 13.1629 84.639 11.901C85.8266 10.6144 87.3359 9.97113 89.1668 9.97113C90.9978 9.97113 92.4823 10.7258 93.6204 12.2351V10.1938H96.5153ZM89.6493 20.734C90.8122 20.734 91.7648 20.3381 92.507 19.5464C93.2493 18.7299 93.6204 17.7278 93.6204 16.5402C93.6204 15.3278 93.2369 14.3258 92.4699 13.534C91.7277 12.7175 90.7751 12.3093 89.6122 12.3093C88.4493 12.3093 87.5091 12.7299 86.7916 13.5711C86.0988 14.3876 85.7524 15.3773 85.7524 16.5402C85.7524 17.7278 86.1112 18.7299 86.8287 19.5464C87.5462 20.3381 88.4864 20.734 89.6493 20.734ZM103.624 24H100.729V10.1938H103.624V12.6804C104.094 11.8392 104.737 11.1835 105.553 10.7134C106.395 10.2186 107.285 9.97113 108.226 9.97113C109.834 9.97113 111.108 10.4536 112.048 11.4186C112.989 12.3835 113.459 13.7567 113.459 15.5381V24H110.527V16.4289C110.527 13.8804 109.475 12.6062 107.372 12.6062C106.308 12.6062 105.417 12.9526 104.7 13.6454C103.982 14.3134 103.624 15.266 103.624 16.5031V24Z" fill="#CBCBCB"/>
          </svg>
          <div className="stick"> | </div>
          <button className="menu"></button>
          <h1 className="headerTitle">Title</h1>
          </div>

          <div className="HeaderRight">
            
            <button className='Upgrade'>Upgrade</button>
            {/* <Router>
                <LInk to="/price" className="button">Upgrade</LInk>
            </Router>
            <Switch>
                <Route path="/price">
                    <Price/>
                </Route>
            </Switch> */}
          </div>
      </div>
    );
  }
  
  export default Header;
  