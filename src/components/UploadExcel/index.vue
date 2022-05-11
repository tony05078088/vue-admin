<template>
    <div class="upload-excel">
        <div class="btn-upload">
            <el-button :loading="loading" type="primary" @click="handleUpload">
                {{ $t('msg.uploadExcel.upload') }}
            </el-button>
        </div>
        <input
            type="file"
            ref="excelUploadInput"
            class="excel-upload-input"
            accept=".xlsx,.xls"
            @change="handleChange"
        />
        <!-- https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API -->
        <div
            class="drop"
            @drop.stop.prevent="handleDrop"
            @dragover.stop.prevent="handleDragover"
            @dragenter.stop.prevent="handleDragover"
        >
            <el-icon>
                <upload></upload>
            </el-icon>
            <span>{{ $t('msg.uploadExcel.drop') }}</span>
        </div>
    </div>
</template>

<script setup>
import { Upload } from '@element-plus/icons-vue';
import { getHeaderRow, isExcel } from './utils';
import { ref, defineProps } from 'vue';
import XLSX from 'xlsx';
import { ElMessage } from 'element-plus';

const props = defineProps({
    // 上傳前的callback
    beforeUpload: Function,
    // 上傳成功的callback
    onSuccess: Function
});

// 點擊上傳觸發
const loading = ref(false);
const excelUploadInput = ref(null);

const handleUpload = () => {
    excelUploadInput.value.click();
};
const handleChange = e => {
    const files = e.target.files;
    const rawwFile = files[0];
    if (!rawwFile) return;
    console.log(rawwFile);
    uploaded(rawwFile);
};

// 拖曳上傳
const handleDrop = e => {
    //   上傳中
    if (loading.value) return;
    const files = e.dataTransfer.files;
    if (files.length !== 1) {
        ElMessage.error('必須有一份文件');
        return;
    }
    const rawwFile = files[0];
    //  判斷是否為excel檔案
    if (!isExcel(rawwFile)) {
        ElMessage.error('文件格式必須是.xlsx,.xls,.csv格式');
        return;
    }
    uploaded(rawwFile);
};
const handleDragover = e => {
    e.dataTransfer.dropEffect = 'copy';
};

// 觸發上傳事件
const uploaded = rawFile => {
    // 選中的值清空
    excelUploadInput.value.value = null;
    // 若用戶沒有指定上傳前回調的話
    if (!props.beforeUpload) {
        readerData(rawFile);
        return;
    }

    // 若用戶指定了上傳前的回調,那麼只有回傳true,才會執行對應的後續操作
    const before = props.beforeUpload();
    if (before) {
        readerData(rawFile);
    }
};

// 讀取數據(異步)
const readerData = rawFile => {
    loading.value = true;
    /* eslint-disable */
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        //  讀取操作完成時觸發
        reader.onload = e => {
            // 1.獲取到解析後的數據
            const data = e.target.result;
            // 2.利用XLSX對數據進行解析
            const workbook = XLSX.read(data, { type: 'array' });
            // 3.獲取第一張表格（工作頁）
            const firstSheetName = workbook.SheetNames[0];
            // 4.讀取sheet1(第一張表格)的數據
            const workSheet = workbook.Sheets[firstSheetName];
            // 5.解析數據表頭
            const header = getHeaderRow(workSheet);
            // 6.解析數據體
            const result = XLSX.utils.sheet_to_json(workSheet);
            // 7.傳入解析後數據
            generateData({ header, result });
            // 8.處理loading
            loading.value = false;
            // 9.成功回調
            resolve();
        };

        reader.readAsArrayBuffer(rawFile);
    });
};

// 根據導入內容 生成數據
const generateData = excelData => {
    props.onSuccess && props.onSuccess(excelData);
};
</script>

<style scoped lang="scss">
.upload-excel {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    .excel-upload-input {
        display: none;
        z-index: -9999;
    }
    .btn-upload,
    .drop {
        border: 1px dashed #bbb;
        width: 350px;
        height: 160px;
        text-align: center;
        line-height: 160px;
    }
    .drop {
        line-height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #bbb;
        i {
            font-size: 60px;
            display: block;
            margin: 0 auto;
        }
    }
}
</style>
