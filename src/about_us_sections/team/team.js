import React from 'react'
import './team.css'

let teamCard = [
    {
        imgUrl:'./team/team1.png',
        name:'Leonard John Davies',
        position: 'Cofounder, CEO'
    },
    {
        imgUrl:'./team/team2.png',
        name:'Francis Weber',
        position: 'Vice Chairman'
    },
    {
        imgUrl:'./team/team3.png',
        name:'Kyla Obrien',
        position: 'Head of Authority'
    },
    {
        imgUrl:'./team/team4.png',
        name:'Adrian Dixon',
        position: 'Support Executive'
    },
    {
        imgUrl:'./team/team5.png',
        name:'Freddy Busby',
        position: 'Project Manager'
    },
    {
        imgUrl:'./team/team6.png',
        name:'Dale Banks',
        position: 'Accountatnt, Finance'
    },
    {
        imgUrl:'./team/team7.png',
        name:'Miriam Middleton',
        position: 'Cofounder, CEO'
    },
    {
        imgUrl:'./team/team8.png',
        name:'Ellen Walton',
        position: 'Vice Chairman'
    },
]

export default function Team() {
  return (
    <div className='team_section'>
        <div className='container'>
        <p className='team_title'>Meet our team</p>
        <p className='team_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br/> varius enim in eros elementum tristique.</p>
        <div className='row forTeamGap'>
        {
            teamCard.map((item,index)=>{
                return(
                    <div key={index} className='team_col'>
                        <div className='team_card'>
                            <img src={item.imgUrl} alt={item.name}/>
                            <p className='team_card_title'>{item.name}</p>
                            <p className='team_card_text'>{item.position}</p>
                            <div className='forLogos'>
                                <img src='facebook.png' alt='logo'/>
                                <img src='twitter.png' alt='logo'/>
                                <img src='linkedin.png' alt='logo'/>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
    </div>  
  )
}
