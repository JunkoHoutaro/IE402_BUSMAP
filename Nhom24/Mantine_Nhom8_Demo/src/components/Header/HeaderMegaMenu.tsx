import React from 'react';
import { Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { MantineLogo } from '@mantinex/mantine-logo';

export function HeaderMegaMenu() {
  let navigate = useNavigate();
  
  const handleLogin = () => {
    let path = `/login`;
    navigate(path);
  };
  const handleHome = () => {
    navigate('/homepage'); 
  };

  return (
    <div className="pb-4">
      <header className="flex justify-between items-center h-full">
        <MantineLogo size={30} />
        <div className="flex space-x-4 h-full">
          <a onClick={handleHome} href="#" className="text-gray-800 hover:text-blue-600">Trang chủ</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Chi tiết sản phẩm</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Liên hệ</a>
        </div>
        <Group className="flex space-x-2">
          <Button variant="outline" onClick={handleLogin}>
            Đăng nhập
          </Button>
          <Button color="blue">
            Đăng ký
          </Button>
        </Group>
      </header>
    </div>
  );
  // <Box pb={18}>
  //     <header className={classes.header}>
  //       <Group justify="space-between" h="100%">
  //         <MantineLogo size={30} />
  //         <Group h="100%" gap={0}>
  //           <Box>
  //             <a href="#" className={classes.link}>
  //               Trang chủ
  //             </a>
  //           </Box>
  //           <Box>
  //             <a href="#" className={classes.link}>
  //               Chi tiết sản phẩm
  //             </a>
  //           </Box>
  //           <Box>
  //             <a href="#" className={classes.link}>
  //               Liên hệ
  //             </a>
  //           </Box>
  //         </Group>
  //         <Group>
  //           <Button variant="default" onClick={handleLogin} className={classes.headerButton}>Đăng nhập</Button>
  //           <Button className={classes.headerButton}>Đăng ký</Button>
  //         </Group>
  //       </Group>
  //     </header>
  //   </Box>
}
