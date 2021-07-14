import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button ,InputGroup,Input,InputGroupAddon,} from "reactstrap";

export default [
    {
        colProps:"col-md-6 col-lg-3 mt-5",
        title: "Product",
        list: [
               {title: "Hire", url: "#Hire", className:"text-success"},
               {icon: <FontAwesomeIcon icon={faBeer}/>, title: "Create", url: "#Create",className:"text-warning"},
               {title: "Templates", url: "#Templates"},
               {title: "All features",url: "#features"},
        ]
    },
    {
        colProps:"col-md-6 col-lg-3 mt-5",
        title: "Learn",
        list: [
               {title: "Blog", url: "#Blog"},
               {title: "Help Center", url: "#Center"},
        ]
    },
    {
        colProps:"col-md-6 col-lg-3 mt-5",
        title: "About Homerun",
        list: [
               {title: "About us", url: "#About"},
               {title: "We're hiring", url: "#hiring", badge:  <span className="badge rounded-pill bg-danger">2</span>},
               {title: "Contact us", url: "#Contact"},
        ]
    },
    {
        colProps:"col-md-6 col-lg-3 mt-5",
        title: "Art of Work newsletter",
        list: [
               {title: "Receive must-read articles and trends on company culture, hiring and work/life balance.",},
        ]
    },
    {
        colProps:"col-md-6 col-lg-3 my-5",
        list: [
               {title: "Pricing",url: "#Pricing"},
               {title: "New in Homerun ✨",url: "#Homerun"},
        ]
    },
    {
        colProps:"col-md-6 col-lg-3 mb-5",
        title: "Guides",
        list: [
            {title: "Remote Hiring", url: "#Hiring" , badge: <span className="badge rounded-pill bg-danger">new</span>} ,
            {title: "Employer Branding", url: "#Employer",},
            {title: "Job Interviewing", url: "#Interviewing"},
            {title: "Diversity & Inclusion", url: "#Inclusion"},
            {title: "Attracting Talent", url: "#Talent"},
            {title: "GDPR Hiring", url: "#Hiring"},
     ]
    },
    {
        colProps:"col-md-6 col-lg-3 mb-5",
        title: "Legal",
        list: [
               {title: "Terms", url: "#Terms"},
               {title: "Privacy", url: "#Privacy"},
        ]
    },
    {
        colProps:"col-md-6 col-lg-3",
        title: "Sign up to our newsletter",
        list: [
            {
                title:    <InputGroup>
                <Input className="fw-bold" placeholder="Search" />
                <InputGroupAddon addonType="append">
                  <Button>Search</Button>
                </InputGroupAddon>
              </InputGroup>
            }
        ]
    },
]