// import links from "../links";
import { Link } from "react-router-dom";

const LinkItem = ({links}) => {


    return (
        <div>
        {links.map((link) => (
            <div key={link.id} class="flex items-center p-2 bg-gray-400 rounded-md mb-2 justify-between">
            <img class="w-10 h-10 rounded-full mr-4" src={link.icon} alt="Avatar of Jonathan Reinink" />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">{link.title}</p>
            </div>
            <svg className="" width="26" height="26" viewBox="0 0 16 16" enable-background="new 0 0 24 24" class="sc-gKsewC iPWGYb"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z" fill="currentColor"></path></svg>
            </div>
        
        ))}
        </div>
    );
}

export default LinkItem;