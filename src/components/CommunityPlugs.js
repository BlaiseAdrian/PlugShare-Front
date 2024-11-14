import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import SolutionCard from './SolutionCard';

function CommunityPlugs() {
    const shops = [
        { name: "Sula’s Shop", price: "10% below Market prices", location: "Wandegeya", quality: "Medium", rating: 4.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Joy Supermarket", price: "5% below Market prices", location: "Kikoni", quality: "High", rating: 4.7, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        { name: "Tendo’s Shop", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },
        
    ];

    const plugFilter = {property: "Sort By", value: "Price"};
    const categoryFilter = {property: "Category", value: "Electronics"};

    return (
        <div>
            <div className='mb-3'>
                <Filter filter = {plugFilter}/>
                <Filter filter = {categoryFilter}/>
            </div> 
            <div className='overflow-auto' style={{maxHeight: "75vh"}}>
                {shops.map((shop, index) => (
                    <SolutionCard key={index} {...shop} />
                ))}
            </div>
        </div>
    );
}

export default CommunityPlugs;
