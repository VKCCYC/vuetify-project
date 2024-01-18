<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1 註冊
    //- VDivider = hr
    VDivider
    VCol(cols="12")
      //- 當我送出的時候表單停用
      //- submit 是下面定義的一個 function
      VForm(:disabled="isSubmitting" @submit.prevent="submit")
        //- 註冊要有的東西
        VTextField(label="帳號"
        maxlength="20" minlength="4"
        counter
        v-model="account.value.value"
        :error-messages="account.errorMessage.value"
        )
        VTextField(label="信箱" type="email"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value")
        VTextField(label="密碼" maxlength="20"
        minlength="4" counter type="password"
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        )
        VTextField(label="確認密碼" maxlength="20"
        minlength="4" counter type="password"
        v-model="passwordConfirm.value.value"
        :error-messages="passwordConfirm.errorMessage.value"
        )
        VBtn(type="submit" color="blue") 註冊
</template>

<script setup>
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

// 註冊成功丟到登入頁
/*
  有 r 是要跳頁
  沒有 r 取這頁的資訊
*/
import { useRouter } from 'vue-router'

import { useSnackbar } from 'vuetify-use-dialog'

import { useApi } from '@/composables/axios'

const { api } = useApi()

const router = useRouter()
const createSnackbar = useSnackbar()

// 定義註冊的表單格式
// 定義註冊表單的資料格式
const schema = yup.object({
  // 裡面放的是錯誤訊息
  // 表單的驗證都放在在這邊了
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符'),
  email: yup
    .string()
    .required('信箱為必填欄位')
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => {
        return validator.isEmail(value)
      }
    ),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '使用者密碼長度不符')
    .max(20, '使用者密碼長度不符'),
  passwordConfirm: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '使用者密碼長度不符')
    .max(20, '使用者密碼長度不符')
    // .oneOf 只允許符合陣列內其中一個值
    // .oneOf(陣列, 錯誤訊息)
    // .ref('password') 代表這個 schema 的 password 欄位值
    .oneOf([yup.ref('password')], '密碼不一致')
})

// ---------------------------------------------------------------------------------
// 建立表單 useForm
const { handleSubmit, isSubmitting } = useForm({
  // 如果傳送中就停用表單
  validationSchema: schema
})
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------
// 建立表單欄位 useField
// useField('這裡的名字要跟上面設定的一樣')
const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------
// 表單被點擊
const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      account: values.account,
      email: values.email,
      password: values.password
    })
    createSnackbar({
      text: '註冊成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'blue',
        location: 'bottom'
      }
    })
    router.push('/login')
  } catch (error) {
    console.log(error)
    // 先判斷如果有 error.response 也有可能請求無回應 如果不是前面幾個的問題 就顯示 '發生錯誤，請稍後再試'
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})
// ---------------------------------------------------------------------------------
</script>
