//DANH SÁCH
// const AdCustomerPage = () => {
//   const { control } = useForm();
//   return (
//     <LayoutAdminAct label="Customer List" content="Manage My Customers">
//       <div>
//         <div className="flex items-center justify-between my-5 px-3">
//           <Input
//             control={control}
//             name="search"
//             className="!w-[300px]"
//             placeholder="Search my Customer..."
//           ></Input>
//           <Button href="/admin/add_customer" kind="secondary2">
//             + Add Customer
//           </Button>
//         </div>
//         <Table>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Customer</th>
//                 <th>PhoneNumber</th>
//                 <th>Quantity Ordered</th>
//                 <th>Total Spent</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-white">
//                 <td className="!text-center">1</td>
//                 <td className="!text-center">
//                   <div className="flex items-center gap-x-3">
//                     <div className="w-[60px] h-[60px]">
//                       <img
//                         src={defaultImage3}
//                         className="w-full h-full object-cover"
//                         alt=""
//                       />
//                     </div>
//                     <div className="flex flex-col justify-center items-start ">
//                       <h1 className="text-gray6 font-semibold">
//                         Nguyễn Mạnh Tiến
//                       </h1>
//                       <p className="text-sm font-normal text-gray4">
//                         tien999@gmail.com
//                       </p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="!text-center">091998734</td>
//                 <td className="!text-center">500</td>
//                 <td className="!text-center">$8000</td>
//                 <td className="!text-center">
//                   <div className="flex items-center justify-center gap-x-4">
//                     <Link className="border p-2">
//                       <FontAwesomeIcon icon={faEye} size="lg" />
//                     </Link>
//                     <Link className="border p-2" to={"/admin/update_customer"}>
//                       <FontAwesomeIcon icon={faPenToSquare} size="lg" />
//                     </Link>
//                     <Link className="border p-2">
//                       <FontAwesomeIcon icon={faTrashCan} size="lg" />
//                     </Link>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </Table>
//       </div>
//     </LayoutAdminAct>
//   );
// };

//THÊM

// const AddCustomerPage = () => {
//   const { control, watch, handleSubmit } = useForm();
//   const { value: showEye2, handleToggleValue: handleToggleEye2 } =
//     useToggleValue();

//   const watchRole = watch("role");
//   return (
//     <LayoutAdminAct
//       label="Add Customer"
//       content="Add a new Customer"
//       content2="Manage My Customers"
//     >
//       <div className="flex gap-x-4 justify-end py-5">
//         <Button kind="discard" href="/admin/customer">
//           Discard
//         </Button>
//         <Button kind="ghost">PUBLISH CUSTOMER</Button>
//       </div>
//       <BoxBigAdmin>
//         <div className="flex justify-center">
//           <ImageUpload></ImageUpload>
//         </div>
//         <div className="mt-10">
//           <GroupJusBeween className="gap-x-8">
//             <BoxField className="flex-1">
//               <LabelField label="Name"></LabelField>
//               <Input
//                 control={control}
//                 name="name"
//                 placeholder="Enter Name..."
//               ></Input>
//             </BoxField>
//             <BoxField className="flex-1">
//               <LabelField label="Phone Number"></LabelField>
//               <Input
//                 control={control}
//                 name="phone_number"
//                 placeholder="Enter Phone Number..."
//               ></Input>
//             </BoxField>
//           </GroupJusBeween>

//           <GroupJusBeween className="gap-x-8 mt-10">
//             <BoxField className="flex-1">
//               <LabelField label="Email"></LabelField>
//               <Input
//                 control={control}
//                 name="email"
//                 placeholder="Enter Email..."
//               ></Input>
//             </BoxField>
//             <BoxField className="flex-1">
//               <LabelField label="Password"></LabelField>
//               <Input
//                 control={control}
//                 kind="eye"
//                 name="password"
//                 type={`${showEye2 ? "text" : "password"}`}
//                 placeholder="Enter Password..."
//                 className="placeholder:opacity-80 placeholder:text-[14px]"
//                 cssEye="mt-[5px]"
//               >
//                 <IconEyeToggle
//                   open={showEye2}
//                   onClick={handleToggleEye2}
//                 ></IconEyeToggle>
//               </Input>
//             </BoxField>
//           </GroupJusBeween>
//           <BoxField className="mt-10">
//             <LabelField label="Role" control={control}></LabelField>
//             <div className="flex items-center gap-x-4">
//               <Radio
//                 control={control}
//                 checked={Number(watchRole) === userRole.ADMIN}
//                 value={userRole.ADMIN}
//                 name="role"
//               >
//                 <span className="block text-gray6">Admin</span>
//               </Radio>
//               <Radio
//                 control={control}
//                 checked={Number(watchRole) === userRole.USER}
//                 value={userRole.USER}
//                 name="role"
//               >
//                 <span className="block text-gray6">User</span>
//               </Radio>
//             </div>
//           </BoxField>
//         </div>
//       </BoxBigAdmin>
//     </LayoutAdminAct>
//   );
// };

//UPDATE

// const UpdateCustomer = () => {
//   const { control, watch, handleSubmit } = useForm();
//   const { value: showEye2, handleToggleValue: handleToggleEye2 } =
//     useToggleValue();

//   const watchRole = watch("role");
//   const watchStatus = watch("status");
//   return (
//     <LayoutAdminAct
//       label="Update Customer"
//       content="Update a Customer"
//       content2="Manage My Customers"
//     >
//       <div className="flex gap-x-4 justify-end py-5">
//         <Button kind="discard" href="/admin/customer">
//           Discard
//         </Button>
//         <Button kind="ghost">UPDATE CUSTOMER</Button>
//       </div>
//       <BoxBigAdmin>
//         <div className="flex justify-center">
//           <ImageUpload></ImageUpload>
//         </div>
//         <div className="mt-10">
//           <GroupJusBeween className="gap-x-8">
//             <BoxField className="flex-1">
//               <LabelField label="Name"></LabelField>
//               <Input
//                 control={control}
//                 name="name"
//                 placeholder="Enter Name..."
//               ></Input>
//             </BoxField>
//             <BoxField className="flex-1">
//               <LabelField label="Phone Number"></LabelField>
//               <Input
//                 control={control}
//                 name="phone_number"
//                 placeholder="Enter Phone Number..."
//               ></Input>
//             </BoxField>
//           </GroupJusBeween>

//           <GroupJusBeween className="gap-x-8 mt-10">
//             <BoxField className="flex-1">
//               <LabelField label="Email"></LabelField>
//               <Input
//                 control={control}
//                 name="email"
//                 placeholder="Enter Email..."
//               ></Input>
//             </BoxField>
//             <BoxField className="flex-1">
//               <LabelField label="Password"></LabelField>
//               <Input
//                 control={control}
//                 kind="eye"
//                 name="password"
//                 type={`${showEye2 ? "text" : "password"}`}
//                 placeholder="Enter Password..."
//                 className="placeholder:opacity-80 placeholder:text-[14px]"
//                 cssEye="mt-[5px]"
//               >
//                 <IconEyeToggle
//                   open={showEye2}
//                   onClick={handleToggleEye2}
//                 ></IconEyeToggle>
//               </Input>
//             </BoxField>
//           </GroupJusBeween>
//           <GroupJusBeween className="gap-x-8 ">
//             <BoxField className="mt-10 flex-1">
//               <LabelField label="Role" control={control}></LabelField>
//               <div className=" flex items-center">
//                 <div className="flex items-center gap-x-4">
//                   <Radio
//                     control={control}
//                     checked={Number(watchRole) === userRole.ADMIN}
//                     value={userRole.ADMIN}
//                     name="role"
//                   >
//                     <span className="block text-gray6">Admin</span>
//                   </Radio>
//                   <Radio
//                     control={control}
//                     checked={Number(watchRole) === userRole.USER}
//                     value={userRole.USER}
//                     name="role"
//                   >
//                     <span className="block text-gray6">User</span>
//                   </Radio>
//                 </div>
//               </div>
//             </BoxField>
//             <BoxField className="mt-10 flex-1">
//               <LabelField label="Status" control={control}></LabelField>
//               <div className="flex items-center gap-x-4 ">
//                 <Radio
//                   control={control}
//                   checked={Number(watchStatus) === userStatus.ACTIVE}
//                   value={userRole.ADMIN}
//                   name="status"
//                 >
//                   <span className="block text-gray6">Active</span>
//                 </Radio>
//                 <Radio
//                   control={control}
//                   checked={Number(watchStatus) === userStatus.BAN}
//                   value={userRole.USER}
//                   name="status"
//                 >
//                   <span className="block text-gray6">Banned</span>
//                 </Radio>
//               </div>
//             </BoxField>
//           </GroupJusBeween>
//         </div>
//       </BoxBigAdmin>
//     </LayoutAdminAct>
//   );
// };
