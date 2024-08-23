import * as React from "react"
import Icon from "../images/icon.png"
import { Link, navigate } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const Test = () => {

  const nav = () => navigate('/')
  return(
    <Layout>
      <h1>test</h1>
      <Link to="/">Home</Link>
       {/* <GatsbyImage image={Icon} alt={"data.blogPost.author"} /> */}
      <StaticImage placeholder="blurred" width={130} src="../images/icon.png" alt="A dinosaur" />
      <StaticImage src="https://images.ctfassets.net/vkdbses00qqt/2Yjamnj5iiT981LbZHQHgI/e4a51ce53f00d52febd3a72caab662ed/cloud.svg" alt="A dinosr" />

      <img src={Icon} />
      <img src="https://images.ctfassets.net/vkdbses00qqt/2Yjamnj5iiT981LbZHQHgI/e4a51ce53f00d52febd3a72caab662ed/cloud.svg" />

      <button onClick={nav}>To Home</button>
    </Layout>
  )
}

export default Test