"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Mic, Square, FileAudio, CheckCircle, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const transcriptionSteps = [
  { id: 1, title: "Upload Audio", description: "Select your audio file", status: "completed" },
  { id: 2, title: "Processing", description: "AI is analyzing your audio", status: "current" },
  { id: 3, title: "Transcription", description: "Converting speech to text", status: "pending" },
  { id: 4, title: "Review", description: "Final accuracy check", status: "pending" },
  { id: 5, title: "Complete", description: "Ready for download", status: "pending" },
]

export default function TranscribePage() {
  const [activeTab, setActiveTab] = useState("upload")
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [transcriptionProgress, setTranscriptionProgress] = useState(45)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">New Transcription</h1>
        <p className="text-gray-600">
          Upload an audio file or record live to get started with AI-powered transcription.
        </p>
      </motion.div>

      {/* Progress Steps */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-600" />
              <span>Transcription Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-6">
              {transcriptionSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      step.status === "completed"
                        ? "bg-green-500 border-green-500 text-white"
                        : step.status === "current"
                          ? "bg-purple-600 border-purple-600 text-white"
                          : "bg-gray-100 border-gray-300 text-gray-400"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-semibold">{step.id}</span>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-sm font-medium text-gray-900">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                  {index < transcriptionSteps.length - 1 && (
                    <div
                      className={`absolute top-5 left-10 w-16 h-0.5 ${
                        step.status === "completed" ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <Progress value={transcriptionProgress} className="h-2" />
            <p className="text-sm text-gray-600 mt-2">Processing: {transcriptionProgress}% complete</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Content */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Upload File</span>
            </TabsTrigger>
            <TabsTrigger value="record" className="flex items-center space-x-2">
              <Mic className="w-4 h-4" />
              <span>Live Recording</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-6">
            <Card>
              <CardContent className="p-8">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-purple-400 transition-colors duration-200">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileAudio className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Drop your audio file here</h3>
                  <p className="text-gray-600 mb-6">Supports MP3, WAV, M4A, FLAC files up to 500MB</p>
                  <Button className="pinecone-button-primary">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose File
                  </Button>
                </div>

                {uploadProgress > 0 && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Uploading: meeting-recording.mp3</span>
                      <span className="text-sm text-gray-500">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="record" className="mt-6">
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      isRecording ? "bg-red-100 animate-pulse" : "bg-gray-100"
                    }`}
                  >
                    <Mic className={`w-12 h-12 ${isRecording ? "text-red-600" : "text-gray-600"}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {isRecording ? "Recording in progress..." : "Ready to record"}
                  </h3>

                  {isRecording && (
                    <div className="text-2xl font-mono text-red-600 mb-4">
                      {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, "0")}
                    </div>
                  )}

                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      onClick={() => setIsRecording(!isRecording)}
                      className={
                        isRecording
                          ? "bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg"
                          : "pinecone-button-primary"
                      }
                      size="lg"
                    >
                      {isRecording ? (
                        <>
                          <Square className="w-5 h-5 mr-2" />
                          Stop Recording
                        </>
                      ) : (
                        <>
                          <Mic className="w-5 h-5 mr-2" />
                          Start Recording
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    Click to start recording. We'll automatically transcribe as you speak.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Settings */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card>
          <CardHeader>
            <CardTitle>Transcription Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Language</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Speaker Detection</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Auto-detect</option>
                  <option>Single speaker</option>
                  <option>Multiple speakers</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Output Format</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Plain Text</option>
                  <option>SRT Subtitles</option>
                  <option>VTT Subtitles</option>
                  <option>JSON</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
