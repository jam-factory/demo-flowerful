"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./instagram-posts.module.scss";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function InstagramPosts() {
  const [posted, setPosted] = useState([]);
  const access_token =
    "EAAGwUwnsRoMBOZBTYiTC7Hk7xEhF5CvZBaAkgsWVB4puTG0yuSiCvnYpIBZA1NBplH0wcBuNQTZByxKzOoiw3gBi6apSKEKJ7V5qsG7CEcJdngd3ueCWccwEPwng7LoCLoJ0WNgsZCtwABCRE4G7sc0AgrbORmfx0nhAUb5BiY2MxA34GikFkoTY0jmLcwr4lBc1NLr7h";
  const user_id = "17841468694124746";
  const get_count = 6; //取得したい投稿数

  useEffect(() => {
    const getInstagramPosts = async () => {
      try {
        const res = await axios.get(
          `https://graph.facebook.com/v20.0/${user_id}?fields=name,media.limit(${get_count}){%20caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=${access_token}`
        );
        setPosted(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getInstagramPosts();
  }, []);

  return (
    <div>
      <div className={styles.list}>
        {posted.length !== 0 &&
          posted.media.data.map((post, index) => (
            <div key={index} className={styles.item}>
              <a className={styles.link} href={post.permalink} target="_blank" rel="noopener noreferrer">
                <Image src={post.media_url} fill alt={post.caption ? post.caption : "Instagramの投稿画像"} />

                <div className={styles.overlay}>
                  <div className={styles.likes}>
                    <FaHeart />
                    <span>{post.like_count}</span>
                  </div>

                  <div className={styles.text}>
                    <span>
                      Instagram
                      <HiOutlineExternalLink />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
