import { useStore } from "react-redux";
import { useEffect, useState } from "react";
import { getProductList, getTotalOrder } from "../../app/selectors";

const Total = () => {
    const store = useStore();
    const [list, setList] = useState(getProductList(store.getState()))

    const totalCommand = getTotalOrder(store.getState())
    useEffect(() => {
        store.subscribe(() => setList(getProductList(store.getState())))
    })

    return <div className="TotalCommand">
        {list.length === 0 ? <div>Aucun produit sélectionné</div> : <div>Total commande {totalCommand} euros</div>}
    </div>
};

export default Total