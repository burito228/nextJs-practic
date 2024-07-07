import Head from "next/head"
import A from "./A"

const MainContainer = ({children, keywords, title}) => {


  return (
    <>
        <Head>
            <meta keywords={"deanmetwise, nextjs" + keywords}></meta>
            <title>{title} Page</title>
        </Head>
        <div className="navbar">
            <A href={'/'} text='Main'></A>
            <A href={'/users'} text='Users'></A>
                
        </div>
        <div>
            {children}
        </div>
        <style jsx>
                {`
                    .navbar{
                        background: orange;
                        padding: 15px;
                        display:flex;
                    }
                    
                `}
        </style>
    </>
  )
}

export default MainContainer
