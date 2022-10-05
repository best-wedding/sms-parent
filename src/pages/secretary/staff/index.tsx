import React from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
// import Profile from 'ProfilePage/Profile';
import ProfilePage from 'ProfilePage';
import SecretaryLayout from 'components/SecretaryLayout';
import { useQuery } from 'react-query';
import { getRequest } from 'api/apiCall';
import { TEACHER } from 'api/apiUrl';
import { queryKeys } from 'api/queryKey';
import { ToastContext } from 'App.jsx';
import Profile from 'School/Staff/Profile';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export const getServerSideProps = (context: { query: { staff: any, school: any } }) => {
  const { staff, school } = context.query;

  return { props: { staff, school } };
};

export default function SingleStaff() {
  const params:{id: any, slug: any} = useParams()
  const {id: staff, slug: school} = params
    const {schoolLogo: logo} = localStorage
    const easysch_token:{school_uid: any} = jwt_decode(localStorage?.easysch_token)
  const {
    data:teacherList
  } = useQuery(
    [queryKeys.getTeacher, easysch_token?.school_uid],
    async () => await getRequest({ url: TEACHER(easysch_token?.school_uid, staff) }),
    {
      retry: 2,
      enabled: !!easysch_token?.school_uid
    }
    )
  const [teacher, setTeacher] = React.useState(teacherList?.data)
    React.useEffect(() => {

    setTeacher(teacherList?.data)
  },[teacherList?.data])

  const StaffDetail = [
    { param: "Full Name", value: teacher?.full_name },
    { param: "Email Address", value: teacher?.email },
    { param: "Class", value: teacher?.class },
    { param: "Gender", value: teacher?.gender },
    { param: "Religion", value: teacher?.religion },
    { param: "Mobile Number", value: teacher?.phone_number },
    { param: "Date Of Birth", value: teacher?.date_of_birth },
    { param: "Residential Address", value: teacher?.address },
  ]
  return (
    <>
      <SecretaryLayout Component={<ProfilePage Component={<Profile data={teacher} details={StaffDetail} logo={logo} />} user="staff" userId={staff} page="Profile" school={school} />} currentPage='Teachers' />
      </>
  )
}
