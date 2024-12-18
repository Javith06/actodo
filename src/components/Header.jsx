function Header(props)
{
    return(
        <div className="bg-[#EFEFEF] p-4 ">
              <h1 className="text-3xl font-medium">Hello {props.username}!</h1>
              <p>I help you to manage your activities :) </p>

        </div>
    )
}

export default Header