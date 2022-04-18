const CartItem = ({ data, deleteFromCart }) => {
  const { id, name, price, quantity } = data;
  return (
    <div className="relative flex h-32 mr-4 bg-yellow-500 border-8 ">
      <div>
        <div className="ml-4 text-lg font-semibold ">
          <h4>{name}</h4>
        </div>
        <div className="ml-4">
          <h5>
            ${price}.00 x {quantity} = {price * quantity}
          </h5>
        </div>
        <div className="absolute bottom-0 mt-2 right-36">
          <button
            onClick={() => deleteFromCart(id)}
            className="p-2 mb-2 rounded-full hover:bg-slate-500 bg-slate-200 place-self-end"
          >
            Eliminar uno
          </button>
        </div>
        <div className="absolute bottom-0 right-0 mt-2">
          <button onClick={()=> deleteFromCart(id, true)}
          className="p-2 mb-2 mr-2 rounded-full hover:bg-slate-500 bg-slate-200 place-self-end">
            Eliminar todos
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
