import axios from "axios";

import styles from "./instagram-posts.module.scss";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

const access_token =
  "EAAGwUwnsRoMBOZBTYiTC7Hk7xEhF5CvZBaAkgsWVB4puTG0yuSiCvnYpIBZA1NBplH0wcBuNQTZByxKzOoiw3gBi6apSKEKJ7V5qsG7CEcJdngd3ueCWccwEPwng7LoCLoJ0WNgsZCtwABCRE4G7sc0AgrbORmfx0nhAUb5BiY2MxA34GikFkoTY0jmLcwr4lBc1NLr7h";
const user_id = "17841468694124746";
const get_count = 6; //取得したい投稿数

async function getInstagramPosts() {
  try {
    const res = await axios.get(
      `https://graph.facebook.com/v20.0/${user_id}?fields=name,media.limit(${get_count}){%20caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=${access_token}`
    );
    return res.data.media.data;
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return [];
  }
}

export default async function InstagramPosts() {
  const posts = await getInstagramPosts();

  return (
    <div>
      <div className={styles.list}>
        {posts &&
          posts.map((post, index) => (
            <div key={index} className={styles.item}>
              <a className={styles.link} href={post.permalink} target="_blank" rel="noopener noreferrer">
                <Image
                  src={post.media_url}
                  width={370}
                  height={370}
                  alt={post.caption ? post.caption : "Instagramの投稿画像"}
                />

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
