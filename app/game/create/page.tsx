const Page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <form action="/123">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="race">Race:</label>
          <input type="text" id="race" name="race" />
          <label htmlFor="weapon">Weapon:</label>
          <input type="text" id="weapon" name="weapon" />
          <label htmlFor="attributes">Attributes:</label>
          <input type="text" id="attributes" name="attributes" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Page;
