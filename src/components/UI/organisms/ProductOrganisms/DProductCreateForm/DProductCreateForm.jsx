'use client'

import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link,RichTextEditor } from '@mantine/tiptap'
import { yupResolver } from '@hookform/resolvers/yup'
import Highlight from '@tiptap/extension-highlight'
import SubScript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { createProductHttp } from '@core/services/api'
import { profileValidation } from '@core/utils'

const DProductCreateForm = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        content,
    })

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(profileValidation),
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => createProductHttp(data),
        onSuccess: (response) => {
            console.log(response)
        },
        onError: (error) => {
            console.log(error)
        },
    })
    const onSubmit = (data) => {
        mutate(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='block md:grid md:grid-cols-2 md:gap-3'>
                    <DInputField className='col-span-2' errors={errors} fieldName={'title'}>
                        <Controller
                            name={'title'}
                            control={control}
                            render={({ field }) => <DTextInput label={'Title'} withAsterisk {...field} />}
                        />
                    </DInputField>
                    <DInputField errors={errors} fieldName={'price'}>
                        <Controller
                            name={'price'}
                            control={control}
                            render={({ field }) => <DTextInput label={'Price'} withAsterisk {...field} />}
                        />
                    </DInputField>
                    <DInputField errors={errors} fieldName={'GategoryId'}>
                        <Controller
                            name={'CategoryId'}
                            control={control}
                            render={({ field }) => <DTextInput label={'Category'} withAsterisk {...field} />}
                        />
                    </DInputField>
                    <div>
                        <RichTextEditor editor={editor}>
                            <RichTextEditor.Toolbar sticky stickyOffset={60}>
                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.Bold />
                                    <RichTextEditor.Italic />
                                    <RichTextEditor.Underline />
                                    <RichTextEditor.Strikethrough />
                                    <RichTextEditor.ClearFormatting />
                                    <RichTextEditor.Highlight />
                                    <RichTextEditor.Code />
                                </RichTextEditor.ControlsGroup>

                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.H1 />
                                    <RichTextEditor.H2 />
                                    <RichTextEditor.H3 />
                                    <RichTextEditor.H4 />
                                </RichTextEditor.ControlsGroup>

                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.Blockquote />
                                    <RichTextEditor.Hr />
                                    <RichTextEditor.BulletList />
                                    <RichTextEditor.OrderedList />
                                    <RichTextEditor.Subscript />
                                    <RichTextEditor.Superscript />
                                </RichTextEditor.ControlsGroup>

                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.Link />
                                    <RichTextEditor.Unlink />
                                </RichTextEditor.ControlsGroup>

                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.AlignLeft />
                                    <RichTextEditor.AlignCenter />
                                    <RichTextEditor.AlignJustify />
                                    <RichTextEditor.AlignRight />
                                </RichTextEditor.ControlsGroup>
                            </RichTextEditor.Toolbar>

                            <RichTextEditor.Content />
                        </RichTextEditor>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DProductCreateForm
