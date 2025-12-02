import  { useState } from 'react';
import { Copy, Check } from 'lucide-react';


// 定義名片資料的類型
interface CardData {
  name: string;
  englishName: string;
  title: string;
  company: string;
  department: string;
  office: string;
  phone1: string;
  phone2: string;
  email: string;
  website: string;
  websiteUrl: string;
  address: string;
  addressEn: string;
  imageUrl: string;
}
const BusinessCardEditor: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);



// 定義欄位名稱的類型（CardData 的所有 key）
type CardDataField = keyof CardData;



  // 名片資料狀態
  const [cardData, setCardData] = useState<CardData>({
    name: '中文姓名',
    englishName: 'sample',
    title: 'Engineer',
    company: 'Industrial Safety And Health Association (ISHA) Of The R.O.C',
    department: 'Safety And Environmental Technology Department',
    office: 'Kaohsiung Office',
    phone1: '+886-7-5503115 ext.',
    phone2: '+886-955-123-456',
    email: '@mail.isha.org.tw',
    website: 'www.isha.org.tw',
    websiteUrl: 'https://www.isha.org.tw/',
    address: '813707 高雄市左營區博愛三路12號15樓',
    addressEn: '15F., No.12. Bo`ai 3rd Road., Zuoying Dist., Kaohsiung City 813707, Taiwan (R.O.C.)',
    imageUrl: 'https://i.imgur.com/wEXUjzU.png'
  });

  // 處理輸入變更（帶有類型定義）
  const handleChange = (field: CardDataField, value: string): void => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };
  // 生成完整的 HTML
  const generateHTML = () => {
    return `<table cellpadding="0" cellspacing="0" border="0" style="
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
        font-size: 14px; 
        margin: 0; 
        padding: 0; 
        border: 0; 
        border-collapse: collapse; 
        border-spacing: 0; 
        max-width: 650px;
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        overflow: hidden;
    ">
    <tbody>
        <tr>
            <td style="padding: 30px 25px; margin: 0; border: 0; vertical-align: top;">
                <table cellpadding="0" cellspacing="0" border="0" style="
                    margin: 0; 
                    padding: 0; 
                    border: 0; 
                    border-collapse: collapse; 
                    border-spacing: 0; 
                    width: 100%;
                ">
                    <tbody>
                        <tr>
                            <td style="
                                margin: 0; 
                                padding: 0; 
                                border: 0; 
                                vertical-align: top; 
                                width: 140px;
                                text-align: center;
                            ">
                                <div style="
                                    width: 120px;
                                    height: 120px;
                                    border-radius: 50%;
                                    overflow: hidden;
                                    margin: 0 auto;
                                    border: 4px solid #e3f2fd;
                                    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
                                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                ">
                                    <img src="${cardData.imageUrl}" alt="${cardData.name} ${cardData.englishName}" style="
                                        width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                        border: 0;
                                        display: block;
                                    ">
                                </div>
                            </td>
                            <td style="width: 30px; padding: 0; margin: 0; border: 0;">&nbsp;</td>
                            <td style="margin: 0; padding: 0; border: 0; vertical-align: top;">
                                <h2 style="
                                    font-size: 24px; 
                                    font-weight: 700;
                                    line-height: 1.3; 
                                    margin: 0 0 8px 0; 
                                    padding: 0; 
                                    border: 0; 
                                    color: #2c3e50;
                                    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
                                ">${cardData.name} <span style="color: #3498db; font-weight: 600;">${cardData.englishName}</span></h2>
                                <p style="
                                    font-size: 16px; 
                                    font-weight: 600;
                                    line-height: 1.4; 
                                    margin: 0 0 6px 0; 
                                    padding: 0; 
                                    border: 0; 
                                    color: #34495e;
                                ">${cardData.title}</p>
                                <p style="
                                    font-size: 15px; 
                                    font-weight: 500;
                                    line-height: 1.4; 
                                    margin: 0 0 4px 0; 
                                    padding: 0; 
                                    border: 0; 
                                    color: #2980b9;
                                ">${cardData.company}</p>
                                <p style="
                                    font-size: 14px; 
                                    line-height: 1.4; 
                                    margin: 0; 
                                    padding: 0; 
                                    border: 0; 
                                    color: #7f8c8d;
                                ">${cardData.department} | <span style="color: #e74c3c; font-weight: 500;">${cardData.office}</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style="
                    height: 2px;
                    background: linear-gradient(90deg, #3498db 0%, #2ecc71 50%, #e74c3c 100%);
                    margin: 25px 0;
                    border-radius: 2px;
                ">&nbsp;</div>
                <table cellpadding="0" cellspacing="0" border="0" style="
                    margin: 0; 
                    padding: 0; 
                    border: 0; 
                    border-collapse: collapse; 
                    border-spacing: 0; 
                    width: 100%;
                ">
                    <tbody>
                        <tr style="margin: 0; padding: 0; border: 0;">
                            <td style="
                                width: 35px; 
                                margin: 0; 
                                padding: 8px 0; 
                                border: 0; 
                                vertical-align: middle;
                                text-align: center;
                            ">
                                <div style="
                                    width: 28px;
                                    height: 28px;
                                    background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
                                    border-radius: 50%;
                                    display: inline-flex;
                                    align-items: center;
                                    justify-content: center;
                                    box-shadow: 0 2px 8px rgba(46, 204, 113, 0.3);
                                ">
                                    <span style="color: white; font-size: 14px; font-weight: bold;">📞</span>
                                </div>
                            </td>
                            <td style="margin: 0; padding: 8px 0 8px 12px; border: 0; vertical-align: middle;">
                                <a href="tel:${cardData.phone1.replace(/\s/g, '')}" style="
                                    color: #2c3e50; 
                                    font-weight: 500; 
                                    text-decoration: none; 
                                    font-size: 14px;
                                    transition: color 0.3s ease;
                                ">${cardData.phone1}</a>
                                <span style="color: #95a5a6; margin: 0 8px;">|</span>
                                <a href="tel:${cardData.phone2.replace(/\s/g, '')}" style="
                                    color: #2c3e50; 
                                    font-weight: 500; 
                                    text-decoration: none; 
                                    font-size: 14px;
                                    transition: color 0.3s ease;
                                ">${cardData.phone2}</a>
                            </td>
                        </tr>
                        <tr style="margin: 0; padding: 0; border: 0;">
                            <td style="
                                width: 35px; 
                                margin: 0; 
                                padding: 8px 0; 
                                border: 0; 
                                vertical-align: middle;
                                text-align: center;
                            ">
                                <div style="
                                    width: 28px;
                                    height: 28px;
                                    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
                                    border-radius: 50%;
                                    display: inline-flex;
                                    align-items: center;
                                    justify-content: center;
                                    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
                                ">
                                    <span style="color: white; font-size: 14px; font-weight: bold;">✉️</span>
                                </div>
                            </td>
                            <td style="margin: 0; padding: 8px 0 8px 12px; border: 0; vertical-align: middle;">
                                <a href="mailto:${cardData.email}" style="
                                    color: #2980b9; 
                                    font-weight: 500; 
                                    text-decoration: none; 
                                    font-size: 14px;
                                    transition: color 0.3s ease;
                                ">${cardData.email}</a>
                            </td>
                        </tr>
                        <tr style="margin: 0; padding: 0; border: 0;">
                            <td style="
                                width: 35px; 
                                margin: 0; 
                                padding: 8px 0; 
                                border: 0; 
                                vertical-align: middle;
                                text-align: center;
                            ">
                                <div style="
                                    width: 28px;
                                    height: 28px;
                                    background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
                                    border-radius: 50%;
                                    display: inline-flex;
                                    align-items: center;
                                    justify-content: center;
                                    box-shadow: 0 2px 8px rgba(155, 89, 182, 0.3);
                                ">
                                    <span style="color: white; font-size: 14px; font-weight: bold;">🌐</span>
                                </div>
                            </td>
                            <td style="margin: 0; padding: 8px 0 8px 12px; border: 0; vertical-align: middle;">
                                <a href="${cardData.websiteUrl}" style="
                                    color: #8e44ad; 
                                    font-weight: 500; 
                                    text-decoration: none; 
                                    font-size: 14px;
                                    transition: color 0.3s ease;
                                ">${cardData.website}</a>
                            </td>
                        </tr>
                        <tr style="margin: 0; padding: 0; border: 0;">
                            <td style="
                                width: 35px; 
                                margin: 0; 
                                padding: 8px 0; 
                                border: 0; 
                                vertical-align: top;
                                text-align: center;
                            ">
                                <div style="
                                    width: 28px;
                                    height: 28px;
                                    background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
                                    border-radius: 50%;
                                    display: inline-flex;
                                    align-items: center;
                                    justify-content: center;
                                    box-shadow: 0 2px 8px rgba(231, 76, 60, 0.3);
                                    margin-top: 2px;
                                ">
                                    <span style="color: white; font-size: 14px; font-weight: bold;">📍</span>
                                </div>
                            </td>
                            <td style="margin: 0; padding: 8px 0 8px 12px; border: 0; vertical-align: top;">
                                <div style="
                                    color: #2c3e50; 
                                    font-size: 14px; 
                                    line-height: 1.5;
                                    font-weight: 400;
                                ">${cardData.address}<br>
                                    <span style="color: #7f8c8d; font-size: 13px;">${cardData.addressEn}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style="
                    height: 4px;
                    background: linear-gradient(90deg, #3498db 0%, #2ecc71 25%, #f39c12 50%, #e74c3c 75%, #9b59b6 100%);
                    margin-top: 25px;
                    border-radius: 2px;
                    opacity: 0.8;
                ">&nbsp;</div>
            </td>
        </tr>
    </tbody>
</table>`;
  };

  // 複製 HTML 到剪貼簿
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateHTML());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('複製失敗:', err);
      alert('複製失敗，請稍後再試');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '40px', fontSize: '32px', fontWeight: 'bold' }}>
          名片編輯器
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* 左側：編輯表單 */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '24px', color: '#2c3e50', fontSize: '24px' }}>編輯名片資訊</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>姓名</label>
                <input
                  type="text"
                  value={cardData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>英文名稱</label>
                <input
                  type="text"
                  value={cardData.englishName}
                  onChange={(e) => handleChange('englishName', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>職稱</label>
                <input
                  type="text"
                  value={cardData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>公司名稱</label>
                <input
                  type="text"
                  value={cardData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>部門</label>
                <input
                  type="text"
                  value={cardData.department}
                  onChange={(e) => handleChange('department', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>辦公室</label>
                <input
                  type="text"
                  value={cardData.office}
                  onChange={(e) => handleChange('office', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>電話 1</label>
                <input
                  type="text"
                  value={cardData.phone1}
                  onChange={(e) => handleChange('phone1', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>電話 2</label>
                <input
                  type="text"
                  value={cardData.phone2}
                  onChange={(e) => handleChange('phone2', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>Email</label>
                <input
                  type="email"
                  value={cardData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>網站</label>
                <input
                  type="text"
                  value={cardData.website}
                  onChange={(e) => handleChange('website', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>網站網址</label>
                <input
                  type="text"
                  value={cardData.websiteUrl}
                  onChange={(e) => handleChange('websiteUrl', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>地址（中文）</label>
                <input
                  type="text"
                  value={cardData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>地址（英文）</label>
                <input
                  type="text"
                  value={cardData.addressEn}
                  onChange={(e) => handleChange('addressEn', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#34495e', fontWeight: '500' }}>頭像網址</label>
                <input
                  type="text"
                  value={cardData.imageUrl}
                  onChange={(e) => handleChange('imageUrl', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>
            </div>
          </div>

          {/* 右側：預覽和複製 */}
          <div>
            <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ color: '#2c3e50', fontSize: '24px', margin: 0 }}>預覽</h2>
                <button
                  onClick={copyToClipboard}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    background: copied ? '#27ae60' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  {copied ? (
                    <>
                      <Check size={20} />
                      已複製！
                    </>
                  ) : (
                    <>
                      <Copy size={20} />
                      複製 HTML
                    </>
                  )}
                </button>
              </div>

              {/* 名片預覽 */}
              <div
                style={{
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  padding: '20px',
                  background: '#f8f9fa',
                  overflow: 'auto'
                }}
                dangerouslySetInnerHTML={{ __html: generateHTML() }}
              />
            </div>

            {/* 使用說明 */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#2c3e50', marginBottom: '12px' }}>使用說明</h3>
              <ul style={{ color: '#555', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>在左側表單編輯您的名片資訊</li>
                <li>右側會即時預覽名片樣式</li>
                <li>點擊「複製 HTML」按鈕將完整的 HTML 代碼複製到剪貼簿</li>
                <li>可以直接貼到 Email 簽名檔或其他支援 HTML 的地方</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardEditor;
