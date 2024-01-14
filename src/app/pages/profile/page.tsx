"use client"

import React from "react";
import { useState } from "react";
import "./page.css";
import Avatar from '@mui/material/Avatar';
import img4 from "../../_assets/image6.png"
import imgP from "../../_assets/post1.webp"
import img6 from "../../_assets/image4.jpg"
import p2 from "../../_assets/post2.webp"
import p3 from "../../_assets/post3.webp"
import CircularProgress from '@mui/material/CircularProgress';
import PostInMyProfile from "@/app/compnents/PofilePosts";
import FollowersInMyProfile from "@/app/compnents/ProfileFollowers";
import FollowingInMyProfile from "@/app/compnents/ProfileFollowing";
import { useAppSelector } from "@/app/globalRedux/hooks";

export default function MyProfile(){
    const imgp4 = img4.src
    const [active , setActive] = useState("POSTS")

    const id = useAppSelector((state) => state.currentUser.user.id)
    const username = useAppSelector((state) => state.currentUser.user.username);
    const name = useAppSelector((state) => state.currentUser.user.name);
    const followers = useAppSelector((state) => state.userFollowers.numberOfFollowers);
    const followings = useAppSelector((state) => state.userFollowing.followingNumbers);
    const posts = useAppSelector((state) => state.userPost.postCount)

    return (
    <div className="mainDiv">
      <section className="sec2">
            <div className="secondary-div1">
                <Avatar alt="Profile Pic" src={imgp4} style={{position : "relative" , width : "20vh" , height : "20vh" , marginTop : "5vh" , marginLeft : "16vh" , border: "2px solid black"}}/>
                <div className="profileInfo">
                    <h1>{id !== null ? (
                        name
                    ) : (
                        <CircularProgress color="inherit" size={35} sx={{marginLeft : 5}}/>
                        // "Ivanka James"
                        )}</h1>
                    <h2>{username}</h2>
                    {/* <h2>@vibhorhalke</h2> */}
                    <div className="profile-follow">
                        <div className="profile-post">
                            <h1>{posts !== 0 ? (
                                posts
                                ) : (
                                    0
                                    )}</h1>
                            <h3>Post</h3>
                        </div>
                        <div className="profile-followers">
                            <h1>{followers !== 0 ? (
                                followers
                                ) : (
                                    0
                                    )}</h1>
                            <h3>Followers</h3>
                        </div>
                        <div className="profile-following">
                            <h1>{followings !== 0 ? (
                                followings
                                ) : (
                                    0
                                    )}</h1>
                            <h3>Following</h3>
                        </div>
                        <button className="Edit-Profile">Edit Profile</button>
                    </div>
                    <p>Ivanka James: Culinary maven weaving flavors into unforgettable symphonies, turning every meal into a celebration of taste and culture.</p>
                </div>
            </div>
            <div className="secondary-div2">
                <div className="nav-buttons">
                    <button className="button" onClick={() => {setActive("POSTS");}}>
                        POSTS
                    </button>
                    <button className="button" onClick={() => {setActive("FOLLOWING")}}>
                        FOLLOWING                    
                    </button>
                    <button className="button" onClick={() => {setActive("FOLLOWERS")}}>
                        FOLLOWERS
                    </button>
                </div>
                <div className="button_result">
                    {active === "POSTS" && <PostInMyProfile/>}
                    {active === "FOLLOWERS" && <FollowersInMyProfile/>}
                    {active === "FOLLOWING" && <FollowingInMyProfile/>}
                </div>
            </div>
      </section>
    </div>
  )
}