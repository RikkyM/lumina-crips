import { useState, useEffect } from "react";
import renderCard from "../components/Elements/Card/renderCard";
import { products } from "../services/products.service";
import LoadingSpinner from "../components/Layouts/Loading";

const OrderPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setProductData(products);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      <section className="h-dvh pt-20 relative">
        <div
          style={{ backgroundImage: "url('images/background.png')" }}
          className="bg-cover bg-repeat bg-center opacity-10 absolute inset-0"
        ></div>
        <div className="overflow-auto h-full  relative p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 2xl max-w-screen-2xl mx-auto ">
          {isLoading ? <LoadingSpinner /> : products.map(renderCard)}
        </div>
      </section>
    </>
  );
};

export default OrderPage;

// https://wa.me/+6285155407399?text=Halo,%20saya%20ingin%20memesan:%0A%0ALaptop%20Asus%20ROG%0ARp%2015.000.000%20x%201%0ASubtotal:%20Rp%2015.000.000%0A%0AMouse%20Gaming%20Logitech%0ARp%20750.000%20x%202%0ASubtotal:%20Rp%201.500.000%0A%0AMousepad%20XL%0ARp%20200.000%20x%201%0ASubtotal:%20Rp%20200.000%0A%0ATotal:%20Rp%2016.700.000%0A%0AMohon%20diproses%20pesanan%20saya.%20Terima%20kasih!
