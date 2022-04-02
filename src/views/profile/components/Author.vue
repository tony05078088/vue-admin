<template>
    <div class="author">
        <div class="header">
            <pan-thumb
                image="https://media-exp1.licdn.com/dms/image/C5603AQEGN42SRIzvqg/profile-displayphoto-shrink_100_100/0/1517284981028?e=2147483647&v=beta&t=7LG_pACnfsFVPsta_d3sXEhiAEBlpcMt5IbGAAMipi8"
                height="60px"
                width="60px"
            >
                {{ $t('msg.profile.name') }}
            </pan-thumb>
            <div class="header-desc">
                <h3>{{ $t('msg.profile.name') }}</h3>
                <span>{{ $t('msg.profile.job') }}</span>
            </div>
        </div>
        <div class="info">
            {{ $t('msg.profile.Introduction') }}
        </div>
    </div>
</template>

<script setup>
import PanThumb from '@/components/PanThumb';
</script>

<style scoped lang="scss">
.author {
    .header {
        display: flex;
        .header-desc {
            margin-left: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            span {
                font-size: 14px;
            }
        }
    }
    .info {
        margin-top: 16px;
        line-height: 22px;
        font-size: 14px;
        text-indent: 26px;
    }
}
</style>
