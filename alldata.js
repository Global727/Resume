const AllData = () => {
    const asdf = React.useContext(UserContext);
    return (
      <>
      {asdf.users.map((asdf, i) => (
      <card
      key={i}
      bgcolor="dark"
      header="All Data"
      title={"User Name: " + asdf.name}
      text={"Email Information: " + ctx.email}
      body={"Password: " + asdf.password}
      />
    ))}
    </>
    )
  }
  