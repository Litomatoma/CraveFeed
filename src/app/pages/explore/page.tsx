"use client"

import React from "react";
import "./page.css";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import img4 from "../../_assets/image6.png"
import imgP from "../../_assets/post1.webp"
import img6 from "../../_assets/image4.jpg"
import p2 from "../../_assets/post2.webp"
import p3 from "../../_assets/post3.webp"
import ExploreIcon from '@mui/icons-material/Explore';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';

export default function Explore() {
    const imgp4 = img4.src
    const imgp7 = img6.src
    const imgpP = imgP.src
    const p2r = p2.src
    const p3r = p3.src
    return (
    <div className="mainDiv">
      <section className="sec2">
            <div className="search">
                <div className="searchBox">
                    <SearchIcon style={{fontSize : "4.5vh" , marginRight : "2vh" , color: "rgb(213, 213, 213)"}}/>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="addBtn">
                    <button> 
                    <AddBoxIcon/>
                    Add post
                    </button>
                </div>
            </div>
            <div className="posts">
                <div className="PandS">
                    <h1>Your Cravings</h1>
                    <div className="content">

                        {/* This is post content div */}

                        <div className="content-post">
                            <div className = "post-div1" style={{display : "flex"}}>
                                <Avatar alt="Remy Sharp" src={imgp7} style={{position : "relative" , width : "7vh" , height : "7vh" , marginTop : "1vh" , marginBottom : "1vh" , marginLeft : "2vh"}}/>
                                <h2>Big bundah Girl</h2>
                            </div>
                                <img src={imgpP} alt="" />
                            <div className="reactions">
                                <FavoriteIcon style={{color : "crimson"}}/>
                                <ChatBubbleIcon style={{marginLeft : "3vh"}}/>
                                <SendIcon style={{marginLeft : "3vh"}}/>
                            </div>
                        </div>

                        <div className="content-post">
                            <div className = "post-div1" style={{display : "flex"}}>
                                <Avatar alt="Remy Sharp" src={imgp7} style={{position : "relative" , width : "7vh" , height : "7vh" , marginTop : "1vh" , marginBottom : "1vh" , marginLeft : "2vh"}}/>
                                <h2>Big bundah Girl</h2>
                            </div>
                                <img src={p2r} alt="" />
                            <div className="reactions">
                                <FavoriteBorderIcon/>
                                <ChatBubbleIcon style={{marginLeft : "3vh"}}/>
                                <SendIcon style={{marginLeft : "3vh"}}/>
                            </div>
                        </div>

                        <div className="content-post">
                            <div className = "post-div1" style={{display : "flex"}}>
                                <Avatar alt="Remy Sharp" src={imgp7} style={{position : "relative" , width : "7vh" , height : "7vh" , marginTop : "1vh" , marginBottom : "1vh" , marginLeft : "2vh"}}/>
                                <h2>Big bundah Girl</h2>
                            </div>
                                <img src={p3r} alt="" />
                            <div className="reactions">
                                <FavoriteBorderIcon/>
                                <ChatBubbleIcon style={{marginLeft : "3vh"}}/>
                                <SendIcon style={{marginLeft : "3vh"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="creator">
                    <Avatar alt="Remy Sharp" src={imgp7} style={{position : "relative" , width : "30vh" , height : "30vh" , marginTop : "2vh", justifyContent : "center", marginLeft : "8vh" , border : "2px solid black"}}/>
                    <h2>Big bundah Girl</h2>
                    <div style={{display : "flex" , marginTop : "1vh"}}>
                        <div className="creator-followers">
                            <h1>1.5M</h1>
                            <h3>Followers</h3>
                        </div>
                        <div className="creator-following">
                            <h1>1</h1>
                            <h3>Following</h3>
                        </div>
                    </div>
                    <div className="creator_summary">
                        <p>Embracing my curves with confidence, I am the Big Bundah girl who owns every room she enters.</p>
                        <p>My big bundah is not just a feature! I walk with a stride that speaks volumes, turning heads and breaking stereotypes</p>
                    </div>
                    <div className="creator-favourite-foods">
                        <h1>Favourite foods :</h1>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
}