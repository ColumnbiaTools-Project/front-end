"use client";
import { ProductCategory } from "@/Constants/Constant";
import useProduct from "@/hooks/useProduct";
import { useState } from "react";
import useStorage from "@/hooks/useStorage";
import AutoComplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import Chip from "@mui/material/Chip";

export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur. Amet mi sollicitudin netus arcu. Pharetra tristique pharetra lorem etiam nulla suspendisse nunc cras. Adipiscing metus pulvinar interdum Lorem ipsum dolor sit amet consectetur. Amet mi sollicitudin netus arcu. ",
  );
  const [images, setImages] = useState<string[]>([]);
  const [imageKeys, setImageKeys] = useState<string[]>([]);
  const [category, setCategory] = useState("All");
  const [features, setFeatures] = useState([
    "Amet mi sollicitudin netus arcu. Pharetra tristique pharetra lorem etiam nulla suspendisse nunc cra",
    "Adipiscing metus pulvinar interdum",
  ]);
  const [youtubeURLs, setYoutubeURLs] = useState([""]);
  const [recommendations, setRecommendations] = useState([""]);
  const {
    storageQuery: { data: storage },
  } = useStorage();
  const storageKeysArr = storage ? Object.keys(storage) : [];

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const onChangeImage = (value: string[]) => {
    setImageKeys(value);
    console.log(value);
    const urls: string[] = value.map((item: string) => {
      if (storage) return storage[item];
      else return "";
    });
    console.log(urls);
    setImages(urls);
  };

  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const onChangeFeature = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeatures([e.target.value]);
  };

  const onChangeRecommendation = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedRecommendations = [...recommendations];
    updatedRecommendations[index] = e.target.value;
    setRecommendations(updatedRecommendations);
  };

  const onChangeYoutubeURL = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedYoutubeURLs = [...youtubeURLs];
    updatedYoutubeURLs[index] = e.target.value;
    setYoutubeURLs(updatedYoutubeURLs);
  };

  const onAddRecommendationInput = () => {
    setRecommendations([...recommendations, ""]);
  };

  const onAddYoutubeURLInput = () => {
    setYoutubeURLs([...youtubeURLs, ""]);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      title,
      price,
      description,
      images,
      category,
      features,
      youtubeURLs,
      recommendations,
    });
  };

  return (
    <div className="bg-slate-400 w-screen h-screen">
      <form onSubmit={onSubmit} className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <label>제품명</label>
          <input
            className="input input-bordered"
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
          <label>가격</label>
          <input
            className="input input-bordered"
            type="number"
            value={price}
            onChange={onChangePrice}
          />
          <label>설명</label>
          <textarea
            className="textarea textarea-bordered"
            value={description}
            onChange={onChangeDescription}
          />
          <label>카테고리</label>
          <select
            className="select select-bordered"
            value={category}
            onChange={onChangeCategory}
          >
            {ProductCategory.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label>이미지 링크</label>
          <div>
            <AutoComplete
              multiple
              value={imageKeys}
              onChange={(event, value) => onChangeImage(value)}
              options={storageKeysArr}
              renderInput={(params: any) => (
                <TextField {...params} label="파일명" />
              )}
              sx={{ width: 300 }}
              filterSelectedOptions
              isOptionEqualToValue={(option, value) => {
                return option === value;
              }}
              renderTags={(value, getTagProps) => {
                return value.map((option, index) => (
                  <Chip
                    {...getTagProps({ index })}
                    key={option}
                    label={option}
                  />
                ));
              }}
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option}>
                    {option}
                  </li>
                );
              }}
              className="bg-white"
            />
          </div>
          <label>유튜브 링크</label>
          {youtubeURLs.map((url, index) => (
            <div key={index}>
              <input
                className="input input-bordered"
                type="text"
                value={url}
                onChange={e => onChangeYoutubeURL(e, index)}
              />
            </div>
          ))}

          <button className="btn" type="button" onClick={onAddYoutubeURLInput}>
            유튜브 url추가
          </button>
          <label>추천제품</label>
          {recommendations.map((recommendation, index) => (
            <div key={index}>
              <input
                className="input input-bordered"
                type="text"
                value={recommendation}
                onChange={e => onChangeRecommendation(e, index)}
              />
            </div>
          ))}
          <button
            className="btn"
            type="button"
            onClick={onAddRecommendationInput}
          >
            추천제품 추가(id)
          </button>
          <label>특징</label>
          <input
            className="input input-bordered"
            type="text"
            value={features[0]}
            onChange={onChangeFeature}
          />
          <button className="btn bg-green-200" type="submit">
            제품 추가하기
          </button>
        </div>
      </form>
    </div>
  );
}
