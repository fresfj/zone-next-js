import { MainLayout } from 'src/layouts/main';
import { EcommerceTemplate } from 'src/layouts/template/ecommerce';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <MainLayout>
      <EcommerceTemplate>{children}</EcommerceTemplate>
    </MainLayout>
  );
}
