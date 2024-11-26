import { AuthSplitLayout } from 'src/layouts/auth/split';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthSplitLayout
      section={{
        title: `Manage The Job \n More Effectively`,
      }}
    >
      {children}
    </AuthSplitLayout>
  );
}
