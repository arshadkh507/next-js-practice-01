interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}

      <div>
        <h2>Featuered products section</h2>
      </div>
    </div>
  );
};

export default ProductLayout;
