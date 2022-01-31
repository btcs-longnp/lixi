/* eslint-disable no-console */
import { useEffect, useRef, useState } from 'react';

import { Button, Form, InputNumber, Modal } from 'antd';
import Image from 'next/image';

import { Meta } from '../layout/Meta';

interface Wallet {
  '20': number;
  '50': number;
  '100': number;
  '200': number;
  '500': number;
}

const getCurrency = (wallet: Wallet): string | null => {
  const currencies: ('20' | '50' | '100' | '200' | '500')[] = [];

  Object.keys(wallet).forEach((key) => {
    if (wallet[key as '20' | '50' | '100' | '200' | '500'] > 0) {
      for (
        let i = 0;
        i < wallet[key as '20' | '50' | '100' | '200' | '500'];
        i += 1
      ) {
        currencies.push(key as '20' | '50' | '100' | '200' | '500');
      }
    }
  });

  if (currencies.length === 0) {
    return null;
  }

  const random = Math.random() * currencies.length;
  console.log('Random number:', random);

  return currencies[Math.floor(random)] as '20' | '50' | '100' | '200' | '500';
};

const Index = () => {
  const [wallet, setWallet] = useState<Wallet>({
    '20': 0,
    '50': 20,
    '100': 10,
    '200': 5,
    '500': 0,
  });
  const [currency, setCurrency] = useState<string | null>(null);
  const isFirstTimeChangedWallet = useRef(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const [form] = Form.useForm();

  const takeCurrency = () => {
    const c = getCurrency(wallet);
    setWallet((w) => {
      const newWallet = { ...w };
      if (newWallet[c as '20' | '50' | '100' | '200' | '500'] > 0) {
        newWallet[c as '20' | '50' | '100' | '200' | '500'] -= 1;
      }
      return newWallet;
    });

    setCurrency(c);
    console.log('Selected currency:', c);

    return c;
  };

  useEffect(() => {
    console.log('Wallet:', wallet);

    if (isFirstTimeChangedWallet.current) {
      isFirstTimeChangedWallet.current = false;
      return;
    }

    localStorage.setItem('wallet', JSON.stringify(wallet));
  }, [wallet]);

  useEffect(() => {
    const w = localStorage.getItem('wallet');
    if (w) {
      setWallet(JSON.parse(w));
    }
  }, []);

  return (
    <>
      <Meta title="Lixi" description="Happy coding" />
      <div
        className="h-screen w-screen relative flex justify-center bg-opacity-30"
        style={{
          background: 'url(/assets/images/bg.jpeg)',
          backgroundSize: 'auto 150%',
          backgroundPosition: 'center',
        }}
      >
        {typeof currency !== 'string' ? (
          <div
            className="absolute bottom-8 w-5/6 aspect-[3/6] rounded-md overflow-hidden shadow-md animate-bounce"
            onClick={() => takeCurrency()}
          >
            <Image src="/assets/images/lixi1.png" layout="fill" alt="Lixi" />
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-8">
                {currency}
                <span className="text-6xl ml-2">K</span>
              </div>
              <Button
                type="primary"
                onClick={() => setCurrency(null)}
                key="reset"
                style={{ background: 'rgb(239 68 68)', border: 'none' }}
                size="large"
              >
                Back
              </Button>
            </div>
          </div>
        )}

        <div className="absolute bottom-2">
          <Button type="text" onClick={() => setIsShowModal(true)}>
            Refill
          </Button>
        </div>

        <Modal
          visible={isShowModal}
          onCancel={() => setIsShowModal(false)}
          onOk={() => {
            form.submit();
            setIsShowModal(false);
          }}
        >
          <Form
            form={form}
            onFinish={(values) => {
              const newWallet = { ...wallet };
              Object.keys(values).forEach((key) => {
                newWallet[key as '20' | '50' | '100' | '200' | '500'] =
                  values[key];
              });
              setWallet(newWallet);
            }}
          >
            <Form.Item
              label="20K"
              name="20"
              rules={[{ required: true, message: 'Please input your 20!' }]}
              initialValue={wallet['20']}
            >
              <InputNumber size="large" min={0} />
            </Form.Item>
            <Form.Item
              label="50K"
              name="50"
              rules={[{ required: true, message: 'Please input your 50!' }]}
              initialValue={wallet['50']}
            >
              <InputNumber size="large" min={0} />
            </Form.Item>
            <Form.Item
              label="100K"
              name="100"
              rules={[{ required: true, message: 'Please input your 100!' }]}
              initialValue={wallet['100']}
            >
              <InputNumber size="large" min={0} />
            </Form.Item>
            <Form.Item
              label="200K"
              name="200"
              rules={[{ required: true, message: 'Please input your 200!' }]}
              initialValue={wallet['200']}
            >
              <InputNumber size="large" min={0} />
            </Form.Item>
            <Form.Item
              label="500K"
              name="500"
              rules={[{ required: true, message: 'Please input your 500!' }]}
              initialValue={wallet['500']}
            >
              <InputNumber size="large" min={0} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default Index;
