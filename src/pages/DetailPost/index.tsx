import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPost, getPosts } from "../../redux/slices/postSlice";

type Props = {};

const DetailPost = (props: Props) => {
  const {id} = useParams();
  const dispatch = useDispatch<any>();
  const post = useSelector((state:any)=>state.post.post)
  console.log(post)
  useEffect(()=>{
    (async()=>{
      await dispatch(getPost(id)).unwrap();

    })();
  },[id,dispatch]);
  useEffect(() => {
    dispatch(
      getPosts({
        page: 1,
        limit: 3,
      })
    );
  }, [dispatch, 1]);
  return (
    <div className="w-10/12 m-auto py-5">
      <nav className="lg:relative top-[67px] lg:top-0 left-0 right-0 w-full lg:w-auto h-screen lg:h-full transition-transform duration-200">
        <ul className="flex font-semibold gap-5 lg:gap-0 pt-4 lg:pt-0 flex-col lg:flex-row w-[320px] lg:w-auto bg-white border lg:border-none border-r-gray-300 h-screen lg:h-full transition-transform duration-200">
          <li className="group block relative mx-1 mt-1 text-slate-200 hover:text-blue-400 transition duration-400 ease-in-out">
           <Link to={"/"}>Trang chủ</Link> 
          </li>
          <li className=" block relative mx-1 mt-1 text-slate-200 duration-400">
            |
          </li>
          <li className=" block relative mx-1 mt-1 text-slate-200 transition duration-400">
            Bài viết
          </li>
          <li className=" block relative mx-1 mt-1 text-slate-200 duration-400">
            |
          </li>
          <li className=" block relative mx-1 mt-1 transition duration-400">
           {post.title}
          </li>
        </ul>
      </nav>
      <div className="content mt-5 grid grid-cols-3 gap-6  ">
        <div className="col-span-2">
          <img
            className="w-full"
            src={post.image}
            alt=""
          />
          <div>
            <h3 className="text-xl mt-5 font-semibold ">
              {post.desc}
            </h3>
            <p className="indent-5 mt-2 text-base">
              {post.content}
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl">Bài viết nổi bật</h3>
                  <div className="grid gap-3 grid-cols-2 border-b-2 h-36 mt-4">
             
                <div className="h-4/6">
                <img
                className="w-full h-full"
                src="https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-7.jpg"
                alt=""
              />
                </div>
             
              <div className="flex items-center h-4/6">
                <h3 className="font-medium sm:truncate lg:whitespace-normal">
                  <Link to={``}>
                    LÀM VIỆC NĂNG SUẤT HƠN KHI MẶC TRANG PHỤC CÔNG SỞ
                  </Link>
                </h3>
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2 border-b-2 h-36 mt-4">
            <div className="h-4/6">
                <img
                className="w-full h-full"
                src="https://bizweb.dktcdn.net/100/396/594/files/ao-polo-nam-trung-nien.png?v=1665020319266"
                alt=""
              />
                </div>
              <div className="flex items-center h-4/6">
                <h3 className="">
                  <Link to={``}>
                    LÀM VIỆC NĂNG SUẤT HƠN KHI MẶC TRANG PHỤC CÔNG SỞ
                  </Link>
                </h3>
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2 border-b-2 h-36 mt-4">
              <img
                className="w-full h-4/6"
                src="https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-7.jpg"
                alt=""
              />
              <div className="flex items-center h-4/6">
                <h3 className="">
                  <Link to={``}>
                    LÀM VIỆC NĂNG SUẤT HƠN KHI MẶC TRANG PHỤC CÔNG SỞ
                  </Link>
                </h3>
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2 border-b-2 h-36 mt-4">
              <img
                className="w-full h-4/6"
                src="https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-7.jpg"
                alt=""
              />
              <div className="flex items-center h-4/6">
                <h3 className="">
                  <Link to={``}>
                    LÀM VIỆC NĂNG SUẤT HƠN KHI MẶC TRANG PHỤC CÔNG SỞ
                  </Link>
                </h3>
              </div>
            </div>
            
          </div>
       
      </div>
    </div>
  );
};

export default DetailPost;
