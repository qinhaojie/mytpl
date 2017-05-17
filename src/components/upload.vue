<template>
  <el-upload
  class="avatar-uploader"
  action="/upload"
  :data="uploadData"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<script>
  export default {
    data() {
      return {

        uploadData: {
          userId: 10058
        }
      };
    },
    props: {
      imageUrl: {
        type: String,
        default: ''
      }

    },
    methods: {
      handleAvatarSuccess(res, file) {
        console.log(res)
        this.$emit('urlChange', `/api/v1/common/file/redirectUrl?fileId=${res.data.id}`)
        //this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {

        const isLt2M = file.size / 1024 / 1024 < 2;


        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return   isLt2M;
      }
    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload__input{
    display: none !important;
  }
</style>


