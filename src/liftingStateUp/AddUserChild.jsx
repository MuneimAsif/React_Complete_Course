const AddUserChild = ({ setUser }) => {
  return (
    <>
      <h1>Add User Component</h1>
      <input
        type="text"
        placeholder="Enter user name"
        onChange={(e) => setUser(e.target.value)}
      />
    </>
  );
};
export default AddUserChild;
