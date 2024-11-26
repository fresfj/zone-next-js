import { MainLayout } from 'src/layouts/main';
import { AccountTemplate } from 'src/layouts/template/account';
import { EcommerceTemplate } from 'src/layouts/template/ecommerce';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <MainLayout>
      <EcommerceTemplate>
        <AccountTemplate>{children}</AccountTemplate>
      </EcommerceTemplate>
    </MainLayout>
  );
}
