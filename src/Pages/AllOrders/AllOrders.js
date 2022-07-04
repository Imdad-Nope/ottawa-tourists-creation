import React, { useEffect, useState } from 'react';
import YourOrders from './YourOrders';

const AllOrders = () => {
    const [orders, setOrders] = useState([])
    const [reload, setReload] = useState(false)

    // Get orders

    useEffect(() => {
        fetch('https://damp-bastion-12491.herokuapp.com/bidConfirm')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [reload])


    // Delete Orders 

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete the ordered?')
        if (proceed) {
            const url = `https://damp-bastion-12491.herokuapp.com/bidConfirm/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Deleted successfully.')
                        setReload(!reload)
                    }
                })
        }


    }

    return (
        <div>
            {
                orders.map(order => <YourOrders
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                ></YourOrders>)
            }
        </div>
    );
};

export default AllOrders;