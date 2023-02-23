import AddHomeIcon from '@mui/icons-material/AddHome';
import PersonIcon from '@mui/icons-material/Person';
import AddchartIcon from '@mui/icons-material/Addchart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
     export const sideBarData = [
        {
            icon:AddHomeIcon,
            heading:"Dashboard",
        },
        {
            icon:PersonIcon,
            heading:"Orders",
        },
      
        {
            icon:Inventory2Icon,
            heading:"Products",
        },
        {
            icon:AddchartIcon,
            heading:"Analytics",
        },
        {
            icon:LogoutIcon,
            heading:''
        },

     ]
     export const CardsData = [
        {
            title:"Sales",
            color:{
                backGround:"linear-gradient(180deg,3bb67ff 0%,#c484f3 100%)",
                boxShadow: "0px 10px 20px 0px #e0c6f5",
            },
            barValue:"25,978",
            png:AddchartIcon,
            series:[
                {
                    name:"Sales",
                    data:[10,25,15,30,12,15,20],
                
                },
            ],
        },
                {
                    title:"Revenue",
                    color:{
                        backGround:"linear-gradient(180deg,3bb67ff 0%,#c484f3 100%)",
                        boxShadow: "0px 10px 20px 0px #e0c6f5",
                    },
                    barValue:"25,978",
                    png:AddchartIcon,
                    series:[
                        {
                            name:"Revenue",
                            data:[10,25,15,30,12,15,20],
                        },
                    ],
                },
                        {
                            title:"Expenses",
                            color:{
                                backGround:"linear-gradient(180deg,3bb67ff 0%,#c484f3 100%)",
                                boxShadow: "0px 10px 20px 0px #e0c6f5",
                            },
                            barValue:"25,978",
                            png:AddchartIcon,
                            series:[
                                {
                                    name:"Expenses",
                                    data:[10,25,15,30,12,15,20],
                                },
                        
            ]
        },
    ]
