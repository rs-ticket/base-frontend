
import React, { Suspense } from "react";
import Header from "./NavigationComponents/Header";
import Footer from "./NavigationComponents/Footer";



interface Props {
  children?: any;
}
function Layout({ children }: Props) {

  return (
    <div >
   
      <Header />
     
      <Suspense fallback={"Loading..."}>
        <div className="main">{children}</div>
      </Suspense>
      
      <Footer />
   
  </div>
  );
}

export default Layout;
