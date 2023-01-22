// import links from "../links";
import { Link } from "react-router-dom";

const LinkItem = ({links}) => {


    return (
        <div>
        {links.map((link) => (
            <a href={`${link.url}`}><div key={link.id} className="w-full mx-auto bg-gray-300 border text-gray-800 border-gray-200 rounded-lg shadow-md mb-4 hover:cursor-pointer transition duration-150 hover:bg-gray-800 hover:text-white">
            
            <div className="flex content-evenly justify-between px-4 py-2 gap-x-32">
                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="32" height="32"
                viewBox="0 0 48 48">
                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                </svg> */}
                
                    
                        
                <img width="32" height="32" src={`${link.icon}`}/>
                <p className="text-md font-semibold">{link.title}</p>
                {/* <img width="32" height="32" src="https://img.icons8.com/ios/50/null/upload--v1.png"/> */}
                <svg className="" width="26" height="26" viewBox="0 0 16 16" enable-background="new 0 0 24 24" class="sc-gKsewC iPWGYb"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z" fill="currentColor"></path></svg>
            </div>
            
        </div>
        </a>
    
        ))}
        </div>
    );
}

export default LinkItem;