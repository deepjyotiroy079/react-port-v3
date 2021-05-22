import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { createPost } from '../../api/index';

export const CreateBlog = () => {

	const { register, handleSubmit } = useForm();
    
    const history = useHistory();

	const onSubmit = async (data) => {
        await createPost(data);
        history.push("/");
    }

	return (
		<div>
			<h1>Create New Blog</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<label for="title">Title</label>
					<input
						type="text"
						{...register("title")}
						id="title"
						name="title"
						placeholder="Title"
					/>
				</div>
				<div className="row">
					<label for="description">Description</label>
					<input
						type="text"
						id="description"
						{...register("description")}
						name="description"
						placeholder="Description(optional)"
					/>
				</div>
				<div className="row">
					<label for="markdown">Markdown</label>
					<textarea
						id="markdown"
						name="markdown"
						{...register("markdown")}
						placeholder="Write something.."
						style={{ height: 200 }}
					></textarea>
				</div>
				<div className="row">
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
};
