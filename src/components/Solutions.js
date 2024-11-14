import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import SolutionCard from './SolutionCard';

function Solutions() {
    const shops = [
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s SuperMarket", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Blaise Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
            
    ];

    const plugFilter = {property: "Sort By", value: "Price"};

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Filter filter = {plugFilter}/>
            </div> 
            <div className='overflow-auto' style={{maxHeight: "75vh"}}>
                {shops.map((shop, index) => (
                    <SolutionCard key={index} {...shop} />
                ))}
            </div>
        </div>
    );
}

export default Solutions;
